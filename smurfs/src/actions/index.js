import axios from 'axios';

const URL = "http://localhost:3333/smurfs"

export const SMURF_GET = "SMURF_FETCH";
export const SMURF_FETCHED = "SMURF_FETCHED"; 

export const SMURF_ADDING = "SMURF_ADD";
export const SMURF_ADDED = "SMURF_ADDED"; 

export const SMURF_ERROR = "SMURF_ERROR";

// TODO - review if should add promise.
// get
export const getSmurfs = () =>  {
  return dispatch => {
    dispatch({ type: SMURF_FETCH});

    axios
    .get(URL)
    .then(response => {
      dispatch({type: SMURFS_FETCHED, payload: response.data});
    })
    .catch(error => {
      dispatch({type: SMURF_ERROR, payload: error});
    });
  }
};

// post
export const addSmurf = (smurf) =>  {
  return dispatch => {
    dispatch({ type: SMURF_ADD});

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