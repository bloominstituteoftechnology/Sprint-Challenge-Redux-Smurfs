/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const LOADING_DATA = 'LOADING_DATA';
export const LOADED_DATA = 'LOADED_DATA';
export const FAILED_LOADING_DATA = 'FAILED_LOADING_DATA';


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

export const loadData = (dispatch) => {
  return dispatch => 
     dispatch({ type: LOADING_DATA});
     axios.get('/smurfs')
    // .then(
    //   data => dispatch({ type: LOADED_DATA, data}),
    //   err => dispatch({ type: FAILED_LOADING_DATA, err})
    // );
    .then(res => console.log(res));
}

export const addSmurf = (name, age, height) => {
  return {
    type: ADD_SMURF,
    name: name,
    age: age,
    height: height
  }
}

export const deleteSmurf = (smurfid) => {
  return {
    type: DELETE_SMURF,
    smurfid: smurfid
  }
}