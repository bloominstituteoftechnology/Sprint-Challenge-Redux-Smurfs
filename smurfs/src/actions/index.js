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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const NO_SMURFS_FETCHED = 'NO_SUMRFS_FETCHED';

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const NO_SMURFS_ADDED = 'NO_SMURFS_ADDED';

export function getSmurfs() {
  return function(dispatch) {
  dispatch({ type: FETCHING_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED_SMURFS, payload: response.data });
    })
    .catch(err => {
      console.log("the smurfs must be hiding from us...", err)
      dispatch({ type: NO_SMURFS_FETCHED, payload: err});
    });
  };
}

export function addNewSmurf(smurf) {
  return function(dispatch) {
  dispatch({ type: ADDING_SMURFS }); 
  axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: ADDED_SMURFS, payload: response.data });
    })
    .catach(err => {
      console.log("that smurf doesn't want to be your friend right now...", err)
      dispatch({ type: NO_SMURFS_ADDED, payload: err});
    });
  };
}