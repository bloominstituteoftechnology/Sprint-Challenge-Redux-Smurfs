import { exec } from "child_process";
import { ECONNREFUSED } from "constants";

import axios from "axios";

export const FETCHINGSMURFS = "FETCHINGSMURFS";
export const FETCHEDSMURF = "FETCHEDSMURF";
export const ADDINGSMURF = "ADDINGSMURF";
export const ADDEDSMURF = "ADDEDSMURF";
export const UPDATINGSMURF = "UPDATINGSMURF";
export const UPDATEDSMURF = "UPDATEDSMURF";
export const DELETINGSMURF = "DELETINGSMURF";
export const DELETEDSMURF = "DELETEDSMURF";
export const ERROR = "ERROR";

export const fetchingSmurfs = () => {
  const fetch = axios.get("http://localhost:3333/smurfs/");
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
  const addItem = axios.post("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(ADDINGSMURF);
    addItem
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
  const updateItem = axios.put("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(UPDATINGSMURF);
    updateItem
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
  const deleteItem = axios.delete("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch(DELETINGSMURF);
    deleteItem
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
