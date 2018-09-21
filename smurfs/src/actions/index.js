/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING_SMURFS = "FETCHING";
export const FETCHED_SMURFS = "FETCHED";
export const CREATING_SMURF = "CREATING_SMURF";
export const CREATED_SMURF = "CREATED_SMURF";

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
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = smurf => dispatch => {
  dispatch({ type: CREATING_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: CREATED_SMURF, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
};
