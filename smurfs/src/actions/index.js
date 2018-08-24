import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const SMURF_ERROR = 'SMURF_ERROR';
export const CREATE_SMURF = 'CREATE_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';
export const CREATION_ERROR = 'CREATION_ERROR';
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
export function getSmurfs() {
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: SMURFS_FETCHED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: SMURF_ERROR, payload: err });
    })
  }
}

export function addSmurf(smurf) {
  return function(dispatch) {
    dispatch({ type: CREATE_SMURF });
    axios.post(`http://localhost:3333/smurfs`, smurf)
    .then(response => {
      dispatch({ type: SMURF_CREATED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: CREATION_ERROR, payload: err });
    })
  }
}