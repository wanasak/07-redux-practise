import React from "react";
import { Link } from "react-router-dom";

const ArtistList = props => {
  return (
    <div className="artist_container">
      {props.artists
        ? props.artists.map(item => (
            <Link
              key={item.id}
              to={`/artist/${item.id}`}
              className="artist_item"
            >
              <div
                className="cover"
                style={{
                  background: `url(/images/${item.cover})`
                }}
              >
                <div>{item.name}</div>
              </div>
            </Link>
          ))
        : null}
    </div>
  );
};

export default ArtistList;
