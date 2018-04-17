import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { artistDetails, clearArtistDetails } from "../actions/index";

export class ArtistContainer extends Component {
  componentWillMount() {
    this.props.artistDetails(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtistDetails();
  }

  renderArtistDetails = data =>
    data.artistDetails ? (
      <div className="artist_view">
        <div
          className="artist_background"
          style={{
            background: `url(/images/${data.artistDetails[0].cover})`
          }}
        >
          <Link to="/">Back home</Link>
          <div className="name">{data.artistDetails[0].name}</div>
        </div>
        <div className="artist_description">
          <p>{data.artistDetails[0].bio}</p>
          <div className="tags">
            <div>
              <strong>Styles:</strong> {data.artistDetails[0].style}
            </div>
          </div>
        </div>
        <div className="artist_album_list">
          {data.artistDetails[0].albums
            ? data.artistDetails[0].albums.map(item => (
                <div key={item.cover} className="albums">
                  <div
                    className="cover"
                    style={{
                      background: `url(/images/albums/${item.cover})`
                    }}
                  />
                </div>
              ))
            : null}
        </div>
      </div>
    ) : null;

  render() {
    return <div>{this.renderArtistDetails(this.props.artists)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      artistDetails,
      clearArtistDetails
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
