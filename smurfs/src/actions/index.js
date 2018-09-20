import React from  'react';
import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const SMURF_ERROR = 'SMURF_ERROR';
export const START_SMURF = 'START_SMURF';
export const POST_SMURF = 'POST_SMURF';
export const SMURF_FAIL = 'SMURF_FAIL';
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
export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type:FETCHED_SMURF, payload: response.data});
    })
    .catch(err => {
      dispatch({ type:SMURF_ERROR });
    });
};

export const createSmurf = (newSmurf) => (dispatch) =>{
  dispatch({type: START_SMURF});
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({type: POST_SMURF, payload: response.data})
    })
    .catch(err => {
      dispatch({
        type: SMURF_FAIL, payload: err
      })
    })
}


