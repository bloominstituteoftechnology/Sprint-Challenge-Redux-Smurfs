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
export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const INITIALIZE_SMURF_ADD = 'INITIALIZE_SMURF_ADD';
export const COMPLETE_SMURF_ADD = 'COMPLETE_SMURF_ADD';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => {
        dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: INITIALIZE_SMURF_ADD });
    axios 
      .post('http://localhost:3333/smurfs', newSmurf)
      .then((response) => {
        dispatch({ type: COMPLETE_SMURF_ADD, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_SMURF_ERROR });
      });
  };
};