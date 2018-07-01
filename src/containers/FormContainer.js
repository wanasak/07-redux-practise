import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addArtist } from '../actions';

// PRISTINE, DIRTY, TOUCHED, ERORR
// handleSubmit is provided by reduxForm

class FormContainer extends Component {
    renderInputField(field) {
        return (
            <div>
                <label>{field.myLabel}</label>
                <input type="text" {...field.input} />
                <div className="error">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    rebderSelectorField(field) {
        return (
            <div>
                <label>{field.myLabel}</label>
                <select {...field.input}>
                    <option />
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                </select>
            </div>
        );
    }

    renderTextAreaField(field) {
        return (
            <div>
                <label>{field.myLabel}</label>
                <textarea {...field.input}></textarea>
                <div className="error">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.addArtist(values, () => {
            // this.props.history.push('/');
            alert(this.props.success);
        })
    }

    render() {
        return (
            <div className="form_container">
                <div>
                    <Link to="/">Back home</Link>
                    <h2>Add Artist</h2>
                </div>
                <form onSubmit={this.props.handleSubmit(((event) => this.onSubmit(event)))}>
                    <Field 
                        myLabel="Enter Name"
                        name="name"
                        component={this.renderInputField}
                    />

                    <Field 
                        myLabel="Enter Style"
                        name="style"
                        component={this.rebderSelectorField}
                    />

                    <Field 
                        myLabel="Enter Bio"
                        name="bio"
                        component={this.renderTextAreaField}
                    />

                    <button type="submit" disabled={this.props.pristine || this.props.submitting} className="btn-submit">Create</button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'This name is required';
    }

    // if (!values.style) {
    //     errors.style = 'This style is required';
    // }

    if (!values.bio) {
        errors.bio = 'This bio is required';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        success: state.artists.success
    }
}

export default reduxForm({
    validate,
    form: 'PostArtist'
})(connect(mapStateToProps, { addArtist })(FormContainer));