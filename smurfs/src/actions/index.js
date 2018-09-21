import axios from "axios";
const URL = "http://localhost:3333/smurfs";

//Action types:
export const FETCHING = "FETCHING_SMURFS";
export const FETCHED = "FETCHED_SMURFS_SUCCESS";
export const ERROR = "FETCHING_SMURFS_ERROR";

//Action creator
export const getSmurfsData = () => {
  return dispatch => {
    console.log("fetching");
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => dispatch({ type: FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR }));
  };
};

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
