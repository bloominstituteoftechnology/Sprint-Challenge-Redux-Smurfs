import axios from "axios";

export const GETSMURFS = "GETSMURFS";
export const POSTSMURFS = "POSTSMURFS";
export const ERROR = "ERROR";
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

export const getSmurfs = () => dispatch => {
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: GETSMURFS, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error });
    });
};

export const postSmurfs = smurf => dispatch => {
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(response => {
      dispatch({ type: POSTSMURFS, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error });
    });
};
