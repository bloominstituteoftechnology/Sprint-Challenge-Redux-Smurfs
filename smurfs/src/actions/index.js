/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const ADDING_SMURF='ADDING_SMURF';
export const SMURF_ADDED='SMURF_ADDED';
export const FETCHING_SMURFS='FETCHING_SMURFS';
export const SMURFS_FETCHED='SMURFS_FETCHED';
export const SMURFS_FETCHED_FAILURE='SMURFS_FETCHED_FAILURE';

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
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:5000/api/friends")
    .then(response => {
      console.log(response);
      dispatch({ type: SMURFS_FETCHED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SMURFS_FETCHED_FAILURE, payload: error });
    });
};
export const addSmurf = (newSmurf) => dispatch => {
  dispatch({type:ADDING_SMURF})
  axios
    .post("http://localhost:5000/api/friends", newSmurf)
    .then(response=>{
      console.log(response);
      dispatch({type:SMURF_ADDED, payload:response.data})
    })
    .catch(error => {
      dispatch({ type: SMURFS_FETCHED_FAILURE, payload: error });
    });
};