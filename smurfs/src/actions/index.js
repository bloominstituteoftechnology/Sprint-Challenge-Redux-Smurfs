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
export const addSmurfs = smurf => {
  return dispatch => {
    dispatch({ type: ADD });
    axios
      .post(url, smurf)
      .then(() => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};