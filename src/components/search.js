import React from "react";
import { Link } from 'react-router-dom';

const Search = props => {
    return (
        <div className="search_container">
            <Link to="/artist/create">Create Artist</Link>
            <h2>Search your Artist</h2>
            <input type="text" onChange={event => props.keywords(event)} />
        </div>
    );
};

export default Search;
