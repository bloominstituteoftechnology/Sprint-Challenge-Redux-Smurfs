/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const ADDED_SMURF = "ADDED SMURF";
export const DELETED_SMURF = "DELETED_SMURF";
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

const URL = "http://localhost:3333/smurfs/";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: FETCHED_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurfs = smurf => {
  return dispatch => {
    dispatch({ type: ADDED_SMURF });
    axios
      .post(URL, smurf)
      .then(() => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    // dispatch({ type: DELETED_SMURF });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(() => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
