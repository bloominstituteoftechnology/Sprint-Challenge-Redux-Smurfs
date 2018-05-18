import { exec } from "child_process";
import { ECONNREFUSED } from "constants";

import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHINGSMURFS = "FETCHINGSMURFS";
export const FETCHEDSMURF = "FETCHEDSMURF";
export const ADDINGSMURF = "ADDINGSMURF";
export const ADDEDSMURF = "ADDEDSMURF";
export const UPDATINGSMURF = "UPDATINGSMURF";
export const UPDATEDSMURF = "UPDATEDSMURF";
export const DELETINGSMURF = "DELETINGSMURF";
export const DELETEDSMURF = "DELETEDSMURF";
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
export const fetchingSmurfs = () => {
  const fetch = axios.$2("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(FETCHINGSMURFS);
    fetch
      .then(response => {
        console.log("response.data", response.data);
        dispatch(FETCHEDSMURF);
      })
      .catch(e => {
        console.log("error", e);
        dispatch(ERROR);
      });
  };
};
export const addingSmurf = () => {
  const $2 = axios.$3("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(ADDINGSMURF);
    $2
      .then(response => {
        console.log("response.data", response.data);
        dispatch(ADDEDSMURF);
      })
      .catch(e => {
        console.log("error", e);
        dispatch(ERROR);
      });
  };
};
export const updatingSmurf = () => {
  const $1 = axios.$2("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(UPDATINGSMURF);
    $1
      .then(response => {
        console.log("response.data", response.data);
        dispatch(UPDATEDSMURF);
      })
      .catch(e => {
        console.log("error", e);
        dispatch(ERROR);
      });
  };
};
export const deletingSmurf = () => {
  const $1 = axios.$2("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(DELETINGSMURF);
    $1
      .then(response => {
        console.log("response.data", response.data);
        dispatch(DELETEDSMURF);
      })
      .catch(e => {
        console.log("error", e);
        dispatch(ERROR);
      });
  };
};
