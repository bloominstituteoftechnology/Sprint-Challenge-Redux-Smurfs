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

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURFS_SUCCESS = "ADDING_SMURFS_SUCCESS";
export const ADDING_SMURFS_FAILURE = "ADDING_SMURFS_FAILURE";
export const DELETING_SMURFS_SUCCESS = "DELETING_SMURFS_SUCCESS";
export const DELETING_SMURFS_FAILURE = "DELETING_SMURFS_FAILURE";
export const CLEAR_ERROR = "CLEAR_ERR";

const url = "http://localhost:3333/smurfs";

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: "Failed to add SMURF"
      });
      dispatch(clearError());
    });
};

export const addingSmurf = smurf => dispatch => {
  axios
    .post(url, smurf)
    .then(res => {
      dispatch({ type: ADDING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADDING_SMURFS_FAILURE });
      dispatch(clearError());
    });
};

export const clearError = () => dispatch => {
  setTimeout(() => dispatch({ type: CLEAR_ERROR }), 3500);
};

export const deletingSmurf = id => dispatch => {
  axios
    .delete(`${url}/${id}`)
    .then(res => {
      dispatch({ type: DELETING_SMURFS_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETING_SMURFS_FAILURE });
    });
};