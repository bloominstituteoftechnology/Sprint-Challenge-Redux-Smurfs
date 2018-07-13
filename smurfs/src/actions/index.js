/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
const URL = 'http://localhost:3333/smurfs';
export const fetchSmurfs = () => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    promise
    .then(response => {
      console.log(response.data);
      dispatch({ type: SMURFS_FETCHED, payload: response.data });
    })
    .catch(err => {

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
