import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD = "ADD";


const url = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const addSmurfs = smurf => dispatch => {
  axios
      .post(url, smurf)
      .then(response => {
        dispatch({ type: ADD, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
