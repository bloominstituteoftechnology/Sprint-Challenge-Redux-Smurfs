/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
export const SMURFS_FETCHING = "SMURFS_FETCHING";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const SMURF_ADDING = "SMURF_ADDING";
export const SMURF_ADDED = "SMURF_ADDED";
export const SMURF_ERROR = "SMURF_ERROR";

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

export const fetchSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: SMURFS_FETCHING });
    smurfs
      .then(response => {
        dispatch({
          type: SMURFS_FETCHED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: SMURF_ERROR,
          payload: "Smurf Error!"
        });
      });
  };
};

export const addSmurf = () => {
  const smurf = axios.post("http://localhost:3333/smurfs", smurf);
  return dispatch => {
    dispatch({ type: SMURF_ADDING });
    smurf
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .then(response => {
        dispatch({
          type: SMURF_ADDED,
          smurfs: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: SMURF_ERROR,
          payload: "Error adding smurf friend!"
        });
      });
  };
};
