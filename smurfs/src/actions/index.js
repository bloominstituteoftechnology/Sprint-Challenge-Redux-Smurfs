import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const EDIT_SMURF_START = 'EDIT_SMURF_START';
export const EDIT_SMURF_SUCCESS = 'EDIT_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

const url = 'http://localhost:3333/smurfs/';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get(url)
    .then(response => {
      console.log(response.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURF_FAILURE, payload: error })
    });
}

export const addSmurfs = smurfData => dispatch=> {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(url, smurfData)
    .then(response => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: error })
    });
}

export const editSmurfs = (smurfData, id) => dispatch => {
  dispatch({ type: EDIT_SMURF_START });
  axios
    .put(`${url}${id}`, smurfData)
    .then(response => {
      dispatch({ type: EDIT_SMURF_SUCCESS, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: EDIT_SMURF_FAILURE, payload: error })
    });
}