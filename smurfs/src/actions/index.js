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
import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ERROR = "ERROR";
export const ADDING_SMURF = "ADDING_SMURF";

export const getSmurfs = URL => {
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurf = newSmurf => {
  return function(dispatch) {
    dispatch({ type: ADDING_SMURF });
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
