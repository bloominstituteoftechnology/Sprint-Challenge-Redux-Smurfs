/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const FETCHING_SMURF = "SFETCHING_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const ERROR = "ERROR";

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
  dispatch({ type: FETCHING_SMURF });

  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({ type: GET_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
};
