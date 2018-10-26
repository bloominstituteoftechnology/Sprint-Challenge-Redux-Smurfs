import axios from "axios";

export const GETTING_SMURFS = "GETTING_SMURFS";
export const GETTING_SMURFS_SUCCESS = "GETTING_SMURFS_SUCCESS";
export const GETTING_SMURFS_FAILURE = "GETTING_SMURFS_FAILURE";
export const CREATING_SMURF = "CREATING_SMURF";
export const CREATING_SMURF_SUCCESS = "CREATING_SMURF_SUCCESS";
export const CREATING_SMURF_FAILURE = "CREATING_SMURF_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(({ data }) => {
      dispatch({
        type: GETTING_SMURFS_SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({ type: GETTING_SMURFS_FAILURE, payload: error });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: CREATING_SMURF });
  axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res => {
      dispatch({ type: CREATING_SMURF_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: CREATING_SMURF_FAILURE, payload: error });
    });
};
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
