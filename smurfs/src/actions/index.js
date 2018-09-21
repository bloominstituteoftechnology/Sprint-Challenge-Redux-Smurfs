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

export const ERROR = "ERROR";
export const GETTING_SMURF = "GETTING_SMURF";
export const GET_SMURF = "GET_SMURF";
export const POSTING_SMURF = "POSTING_SMURF";
export const POST_SMURF = "POST_SMURF";

const URL = "http://localhost:3333/smurfs";

export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: GETTING_SMURF });
    axios
      .get(`${URL}`)
      .then(response => {
        dispatch({ type: GET_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const postSmurf = smurf => {
  return dispatch => {
    dispatch({ type: POSTING_SMURF });
    axios
      .post(`${URL}`, smurf)
      .then(response => {
        dispatch({ type: POST_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
