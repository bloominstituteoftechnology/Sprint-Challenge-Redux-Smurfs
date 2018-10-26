/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const FETCHING = "FETCHING";
export const CREATING = "CREATING";
export const FAILURE = "FAILURE";

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
export const getSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch({type: FETCHING});
    promise
      .then(response => dispatch({type: GET_SMURFS, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export const addSmurf = newSmurf => {
  const promise = axios.post("http://localhost:3333/smurfs", newSmurf);
  return function(dispatch) {
    dispatch({type: CREATING});
    promise
      .then(response => dispatch({type: ADD_SMURF, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};
