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
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";

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
  console.log(newSmurf);
  return function(dispatch) {
    dispatch({type: CREATING});
    promise
      .then(response => dispatch({type: ADD_SMURF, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export const deleteSmurf = id => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return function(dispatch) {
    promise
      .then(response => dispatch({type: DELETE_SMURF, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export const updateSmurf = (id, newInfo) => {
  const promise = axios.put(`http://localhost:3333/smurfs/${id}`, newInfo);
  return function(dispatch) {
    promise
      .then(response => dispatch({type: UPDATE_SMURF, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};
