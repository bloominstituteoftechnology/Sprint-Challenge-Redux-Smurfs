import axios from 'axios';

const URL = "http://localhost:3333/smurfs"

export const SMURF_FETCH = "SMURF_FETCH";
export const SMURF_FETCHED = "SMURF_FETCHED"; 

export const SMURF_ADD = "SMURF_ADD";
export const SMURF_ADDED = "SMURF_ADDED"; 

export const SMURF_ERROR = "SMURF_ERROR";

// get
export const getSmurfs = () =>  {
  return dispatch => {
    dispatch({ type: SMURF_FETCH });

    axios
    .get(URL)
    .then(response => {
      dispatch({type: SMURF_FETCHED, payload: response.data});
    })
    .catch(error => {
      dispatch({type: SMURF_ERROR, payload: error});
    });
  }
};

// post
export const addSmurf = (smurf) =>  {
  return dispatch => {
    dispatch({ type: SMURF_ADD });

    axios
    .post(URL, smurf)
    .then(response => {
      dispatch({type: SMURF_ADDED, payload: response.data});
    })
    .catch(error => {
      dispatch({type: SMURF_ERROR, payload: error});
    });
  }
};