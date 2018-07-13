/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';

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
export const addSmurf = () => {
 console.log('add smurf');
 return function(dispatch) {
   dispatch({ADD_SMURF});
 }

 }
  
 export const getSmurfs = () => {
  console.log('get smurfs');
  return function(dispatch) {
  return dispatch({type: GET_SMURFS});
 }
  }
