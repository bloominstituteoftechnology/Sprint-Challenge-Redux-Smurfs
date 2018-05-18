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
          type: FETCHEDSMURF,
          fetched: response.data
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
export const addingSmurf = newItem => {
  const addItem = axios.post("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch({
      type: ADDINGSMURF,
      newItem: newItem
    });
    addItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: ADDEDSMURF,
          newItem: newItem
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
export const updatingSmurf = toUpdate => {
  const updateItem = axios.put("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch({
      type: UPDATINGSMURF,
      toUpdate: toUpdate
    });
    updateItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: UPDATEDSMURF,
          toUpdate: toUpdate
        });
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
export const deletingSmurf = toDelete => {
  const deleteItem = axios.delete(`http://localhost:3333/smurfs/${toDelete}`);
  return dispatch => {
    dispatch({
      type: DELETINGSMURF,
      toDelete: toDelete
    });
    deleteItem
      .then(response => {
        console.log("response.data", response.data);
        dispatch({
          type: DELETEDSMURF,
          toDelete: toDelete
        });
        fetchingSmurfs();
      })
      .catch(e => {
        console.log("error", e);
        dispatch({ type: ERROR });
      });
  };
};
