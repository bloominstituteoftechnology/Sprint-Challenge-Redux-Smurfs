import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const ERROR_FETCHING_SMURF = "ERROR_FETCHING_SMURF";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURF });

  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({ type: FETCHED_SMURF, smurfs: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_FETCHING_SMURF,
        errorMessage: "Unable to catch smurfs"
      });
    });
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
