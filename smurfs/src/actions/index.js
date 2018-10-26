import axios from "axios";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const DELETING_SMURFS = "DELETING_SMURFS";

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: FETCHING_SMURFS_FAILURE, payload: error})
    })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: FETCHING_SMURFS });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: FETCHING_SMURFS_FAILURE, payload: error})
    })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETING_SMURFS });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({type: FETCHING_SMURFS_FAILURE, payload: error})
    })
}

/*
  For this project you'll need at least 2 action creators for the main portion
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also be sure to mind
     the "pending" states like fetching creating updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
