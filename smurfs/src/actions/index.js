import axios from 'axios';

const URL = "http://localhost:3333/smurfs"

export const SMURF_POST = "SMURF_POST";
export const SMURF_PUT = "SMURF_PUT";
export const SMURF_DELETE = "SMURF_DELETE";

export const SMURF_GET = "SMURF_GET";
export const SMURF_ADDING = "SMURF_ADDING";
export const SMURF_ADDED = "SMURF_ADDED"; 
export const SMURF_FETCHED = "SMURF_FETCHED"; 
export const SMURF_ERROR = "SMURF_ERROR";


// get
export const getSmurfs = () =>  {
  return dispatch => {
    dispatch({ type: SMURF_GET});

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
    dispatch({ type: SMURF_ADDING});

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

// put

// delete
