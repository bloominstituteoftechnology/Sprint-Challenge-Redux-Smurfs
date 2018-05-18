import axios from "axios";

export const PENDING_SMURFS = "PENDING_SMURFS";
export const SUCCESS_SMURFS = "SUCCESS_SMURFS";
export const ERROR_SMURFS = "ERROR_SMURFS";

export const getSmurfs = () => {
  const Smurfs = axios.get("http://localhost:3333/api/smurfs");
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    Smurfs
    .then(response => {
      dispatch({ type: SUCCESS_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_SMURFS,
        payload: "Something went wrong with fetching Smurfs"
      });
    });
  };
};

export const addSmurfs = SmurfData => {
  const Smurfs = axios.get("http://localhost:3333/api/smurfs",SmurfData) ;
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    Smurfs
    .then(response => {
      dispatch({ type: SUCCESS_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_SMURFS,
        payload: "Something went wrong with fetching Smurfs"
      });
    });
  };
};


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