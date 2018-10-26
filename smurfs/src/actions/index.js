import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE;"

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
    axios
      .get('http://localhost:3333/smurfs')
      .then( ({ data }) => {   //data or response? 
        dispatch({ 
          type: FETCHING_SMURFS_SUCCESS,
          payload: data });
      })
      .catch(error => {
        dispatch({ 
          type: FETCHING_SMURFS_FAILURE, 
          payload: error });
      })
  }
};

export function addSmurf(smurf) {  //need pass in argument? 
  return function(dispatch) {
    dispatch({ type: ADD_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({
          type: ADD_SMURF_SUCCESS, 
          payload: response.data});
      })
      .catch(error => {
        dispatch({
          type: ADD_SMURF_FAILURE,
          payload: error});
      })
  }
};
