import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHED_SMURF_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHED_SMURF_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const ADDING_SMURF_FAILURE = "ADDING_SMURF_FAILURE";

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

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(({ data }) =>
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: data })
    )
    .catch(({ data }) =>
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: data })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post(URL, smurf)
    .then(({ data }) => dispatch({ type: ADDING_SMURF_SUCCESS, payload: data }))
    .catch(({ data }) =>
      dispatch({ type: ADDING_SMURF_FAILURE, payload: data })
    );
};
