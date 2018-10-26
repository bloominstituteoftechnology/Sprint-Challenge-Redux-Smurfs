import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const COLOSSAL_SMURF_UP = "COLOSSAL_SMURF_UP";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED'

const URL = "http://localhost:3333/smurfs";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(({ data }) => dispatch({ type: SMURFS_FETCHED, payload: data }))
    .catch(err => {
      dispatch({ type: COLOSSAL_SMURF_UP, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post(URL, smurf)
    .then(({ data }) => dispatch({ type: SMURF_ADDED, payload: data }))
    .catch(err => {
      dispatch({ type: COLOSSAL_SMURF_UP, payload: err });
    });
};

export const deleteSmurf = smurfID => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios
    .delete(`${URL}/${smurfID}`)
    .then(({ data }) => {
      dispatch({ type: SMURF_DELETED, payload: data });
    })
    .catch(err => {
      dispatch({ type: COLOSSAL_SMURF_UP, payload: err });
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
