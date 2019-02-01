import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD = "ADD";
export const ADDING = "ADDING";


const URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`${URL}`)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const addSmurf = (smurf)  => {
  return dispatch => {
    dispatch({ type: ADDING });
  axios
      .post(`${URL}`, smurf)
      .then(response => {
        dispatch({ type: ADD, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
