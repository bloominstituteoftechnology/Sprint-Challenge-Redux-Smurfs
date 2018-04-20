import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const fetchSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCHING_ERROR })
      })
  }
}