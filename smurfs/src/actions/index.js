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

export const FETCHING_SMURFS = 'FETCHING_SMUFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const NO_SMURFS_FETCHED = 'NO_SUMRFS_FETCHED';

export const ADDING_SUMRFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const NO_SMURFS_ADDED = 'NO_SMURFS_ADDED';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  const promise = axios.get('/smurfs');
  promise
    .then(response => {
      dispatch({ type: FETCHED_SMURFS, payload: response.data });
    })
    .catch(error => {
      console.log("the smurfs must be hiding from us...", error)
      dispatch({ type: NO_SMURFS_FETCHED, payload: error });
    });
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SUMRFS });
  axios.post('/smurfs', smurf)
    .then(response => {
      dispatch({ type: ADDED_SMURFS, payload: response.data });
    })
    .catach(error => {
      console.log("that smurf doesn't want to be your friend right now...", error)
      dispatch({ type: NO_SMURFS_ADDED, payload: error});
    });
}