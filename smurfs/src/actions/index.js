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
    dispatch({
      type: FETCHINGSMURFS
    });
    fetch
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: FETCHEDSMURF
        });
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
    dispatch({
      type: ADDINGSMURF,
      newItem: action.new
    });
    addItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: ADDEDSMURF,
          newItem: action.new
        });
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
    dispatch({
      type: UPDATINGSMURF,
      toUpdate: action.toUpdate
    });
    updateItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: UPDATEDSMURF,
          toUpdate: action.toUpdate
        });
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
    dispatch({
      type: DELETINGSMURF,
      toDelete: action.toDelete
    });
    deleteItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: DELETEDSMURF,
          toDelete: action.toDelete
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch(ERROR);
      });
  };
};
