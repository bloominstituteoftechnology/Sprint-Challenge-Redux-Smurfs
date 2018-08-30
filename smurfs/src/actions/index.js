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
    //  dispatch({type: LOADING_DATA});
     axios.get('http://localhost:3333/smurfs')
     .then(response => {dispatch({ type: LOADED_DATA, payload: response })})
     .catch(err => {
       dispatch({ type: FAILED_LOADING_DATA, err });
     })
}

export const addSmurf = (name, age, height, dispatch) => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', {
      name: name,
      age: age,
      height: height
    })
    .then( response => 
      dispatch({
        type: ADD_SMURF,
        name: name,
        age: age,
        height: height,
        extra: response
      })
    )
  }
}

export const deleteSmurf = (smurfid) => {
  return {
    type: DELETE_SMURF,
    smurfid: smurfid
  }
}