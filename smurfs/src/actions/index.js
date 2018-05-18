import axios from "axios";

export const PENDING_SMURFS = "PENDING_SMURFS";
export const SUCCESS_SMURFS = "SUCCESS_SMURFS";
export const ERROR_SMURFS = "ERROR_SMURFS";
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
    dispatch({ type: PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
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

export const createSmurf = data => {
  const smurfs = axios.post("http://localhost:3333/smurfs", data);
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR_SMURFS,
          payload: "Something went wrong with posting smurf"
        });
      });
  };
};