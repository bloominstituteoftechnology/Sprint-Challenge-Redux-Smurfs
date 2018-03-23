import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const ERROR_FETCHING_SMURF = "ERROR_FETCHING_SMURF";

export const SAVING_SMURF = "SAVING_SMURF";
export const SMURF_SAVING = "SMURF_SAVING";
export const ERROR_SAVING_SMURF = "ERROR_SAVING_SMURF";

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

export const newSmurf = smurf => dispatch => {
  dispatch({ type: SAVING_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: SMURF_SAVING, smurfs: response.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR_SAVING_SMURF,
        errorMessage: "Error saving the smurf"
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
