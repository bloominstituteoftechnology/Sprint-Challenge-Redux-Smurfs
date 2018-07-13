import {
  get,
  post,
  put,
  delete as _delete
} from 'axios'


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADD_SMURFS = 'ADD_SMURFS'
export const GET_SMURFS = 'GET_SMURFS'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const DELETE_SMURFS = 'DELETE_SMURFS'


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

const addSmurf = () => dispatch => {}
const getSmurf = () => dispatch => {}
const updateSmurf = () => dispatch => {}
const deleteSmurf = () => dispatch => {}
