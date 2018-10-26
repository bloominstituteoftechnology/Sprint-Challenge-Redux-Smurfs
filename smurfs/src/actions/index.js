import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const GOT_SMURFS = "GOT_SMURFS";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err });
    });
};

export const addSmurf = (ev, smurf) => {
  ev.preventDefault();
  return dispatch => {
    dispatch({ type: ADDING_SMURF, payload: smurf });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => dispatch({ type: GOT_SMURFS, payload: res.data }))
      .catch(err => {
        dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err})
      })
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
