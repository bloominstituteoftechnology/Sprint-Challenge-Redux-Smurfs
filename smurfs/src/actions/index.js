import axios from 'axios';

// Set up action types to be bassed to reducers
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const DELETING_SMURFS = 'DELETING_SMURFS'
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_ERROR = 'SMURFS_ERROR';

// Set up actions to be exported into App components props
export const getSmurfs = () => {
  const promise = axios('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: SMURFS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: SMURFS_ERROR });
      })
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
