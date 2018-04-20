/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const ADD_SMURFS = "ADD_SMURFS";
export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const DELETE_SMURFS = "DELETE_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const UPDATING_SMURFS = "UPDATING_SMURFS";
export const DELETING_SMURFS = "DELETING_SMURFS";
export const ADDING_SMURFS = "ADDING_SMURFS";
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
  dispatch({ type: GETTING_SMURFS });
  fetchSmurfs()(dispatch);
};

export const addSmurfs = smurf => dispatch => {
  dispatch({ type: ADDING_SMURFS });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: ADD_SMURFS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error posting the data" });
    });
};

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({ type: UPDATING_SMURFS });

  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(response => {
      dispatch({ type: UPDATE_SMURFS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error updating the data" });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURFS });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log("Delete data", response.data);
      dispatch({ type: DELETE_SMURFS, id: id });
      fetchSmurfs()(dispatch);
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error deleting the data" });
    });
};

const fetchSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error getting smurfs" });
    });
};
