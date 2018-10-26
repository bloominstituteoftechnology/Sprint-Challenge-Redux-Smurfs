import React from 'react';
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';
export const FETCHED = 'FETCHED';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    const promise = axios.get('http://localhost:3333/smurfs');
    promise
    .then(response => {
      dispatch({
        type: FETCHED,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ERROR, err: err })
    })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADDED,
        payload: response.data
      });
    });
  }
}

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