import axios from 'axios';
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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const getSmurfs = URL => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err })
      })
  }
}
