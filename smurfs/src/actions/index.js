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

import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESSFUL = "FETCHING_SMURFS_SUCCESSFUL";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const POSTING_SMURF = "POSTING_SMURF";
export const POSTING_SMURF_SUCCESSFUL = "POSTING_SMURF_SUCCESSFUL";
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE";
export const DELETING_SMURF_SUCCESSFUL = "DELETING_SMURF_SUCCESSFUL";
export const DELETING_SMURF_FAILURE = "DELETING_SMURF_FAILURE";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURFS})
    axios
      .get('http://localhost:3333/smurfs')
      .then(resp => dispatch({type: FETCHING_SMURFS_SUCCESSFUL, payload: resp.data}))
      .catch(err => dispatch({type: FETCHING_SMURFS_FAILURE, payload: err}));
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({type: POSTING_SMURF});
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(resp => dispatch({type: POSTING_SMURF_SUCCESSFUL, payload: resp.data}))
      .catch(err => dispatch({type: POSTING_SMURF_FAILURE, payload: err}));
  }
}

export const removeSmurf = (id) => {
  return dispatch => {
    axios
      .delete('http://localhost:3333/smurfs/:id', {
        params: {
          id: id
        }
      })
      .then(resp => 
        dispatch({type: DELETING_SMURF_SUCCESSFUL, payload: resp.data}))
      .catch(err => dispatch({type: DELETING_SMURF_FAILURE, payload: err}));
  }
}