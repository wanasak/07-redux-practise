import axios from "axios";
import {
  GET_ARTISTS,
  GET_ARTISTS_ALL,
  GET_ARTIST_DETAILS,
  CLEAR_ARTIST_DETAILS,
  ADD_ARTIST
} from './types';

const URL = "http://localhost:3004";

export function artistList(keyword) {
  const request = axios
    .get(`${URL}/artists?q=${keyword}`)
    .then(response => response.data);

  return {
    type: GET_ARTISTS,
    payload: request
  };
}

export function artistListAll() {
  const request = axios
    .get(`${URL}/artists?_limit=6`)
    .then(response => response.data);

  return {
    type: GET_ARTISTS_ALL,
    payload: request
  };
}

export function artistDetails(id) {
  const request = axios
    .get(`${URL}/artists?id=${id}`)
    .then(response => response.data);

  return {
    type: GET_ARTIST_DETAILS,
    payload: request
  };
}

export function clearArtistDetails() {
  return {
    type: CLEAR_ARTIST_DETAILS,
    payload: null
  };
}

export function addArtist(values, cb) {
  const request = axios
    .post(`${URL}/artists`, values)
    .then((() => cb()));

  return {
    type: ADD_ARTIST,
    payload: 'OK'
  }
}
