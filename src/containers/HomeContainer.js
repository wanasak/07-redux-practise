import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { artistListAll, artistList } from "../actions/index";
import ArtistList from "../components/artistlist";
import Search from "../components/search";

class HomeContainer extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.props.artistListAll();
  }

  getKeywords = event => {
    let key = event.target.value;

    this.props.artistList(key);
  };

  render() {
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <ArtistList artists={this.props.artists.artistList} />
      </div>
    );
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
      artistListAll,
      artistList
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
