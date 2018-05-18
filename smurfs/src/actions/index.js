export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


const addSmurf = (smurf) => {type: ADD_SMURF, smurf};
const getSmurf = (smurf) => {type: GET_SMURF, smurf};
const updateSmurf = (smurf) => {type: UPDATE_SMURF, smurf};
const deleteSmurf = (id) => {type: DELETE_SMURF, id};
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
