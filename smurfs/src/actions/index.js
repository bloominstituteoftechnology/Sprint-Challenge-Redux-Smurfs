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

import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

const URL = "http://localhost:3333/smurfs/";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(response => {
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post(URL, smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: error });
    });
};

export const updateSmurf = smurf => dispatch => {
  axios
    .put(`${URL}${smurf.id}`, smurf)
    .then(response => {
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: UPDATE_SMURF_FAILURE, payload: error });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`${URL}${id}`)
    .then(response => {
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: error });
    });
};
