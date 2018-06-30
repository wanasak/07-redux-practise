import {
  GET_ARTISTS,
  GET_ARTISTS_ALL,
  GET_ARTIST_DETAILS,
  CLEAR_ARTIST_DETAILS
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ARTISTS:
    case GET_ARTISTS_ALL:
      return { ...state, artistList: action.payload };

    case GET_ARTIST_DETAILS:
      return { ...state, artistDetails: action.payload };

    case CLEAR_ARTIST_DETAILS:
      return { ...state, artistDetails: action.payload };

    default:
      return state;
  }
}
