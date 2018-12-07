/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

import axios from 'axios';

export const SMURF_FETCHING = 'SMURF_FETCHING';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';

export const ADD_SMURF_FETCHING = 'ADD_SMURF_FETCHING';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      dispatch({ type: SMURF_SUCCESS, payload: response.data})
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_FETCHING });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log(response);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};