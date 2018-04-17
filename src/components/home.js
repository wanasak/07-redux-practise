import React, { Component } from "react";
import axios from "axios";
import ArtistList from "./artistlist";
import Search from "./search";

class Home extends Component {
    state = {
        artists: []
    };

    componentDidMount() {
        axios.get(`http://localhost:3004/artists`).then(res => {
            this.setState({
                artists: res.data
            });
        });
    }

    getKeywords = event => {
        let key = event.target.value;
    };

    render() {
        return (
            <div>
                <Search keywords={this.getKeywords} />
                <ArtistList artists={this.state.artists} />
            </div>
        );
    }
}

export default Home;
