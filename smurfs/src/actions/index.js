/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: FETCH_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: error
      });
    });
};

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const addSmurf = smurf => dispatch => {
  console.log('smurf', smurf);
  dispatch({
    type: ADD_SMURF
  });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.dir(error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      });
    });
};

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
