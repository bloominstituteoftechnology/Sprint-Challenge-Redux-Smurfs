/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const SAVING_SMURFS = 'SAVING_SMURFS';
export const SMURFS_SAVED = 'SMURFS_SAVED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const ERROR = 'ERROR';

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

export const getSmurfs = () => {
  const receiveSmurfs = axios.get('http://localhost:3333/smurfs/');
  return function (dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    receiveSmurfs
      .then(response => dispatch({ type: SMURFS_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }))
  }
}

export const addSmurf = (obj) => {
  const createSmurf = axios.post('http://localhost:3333/smurfs/', obj);
  return function (dispatch) {
    dispatch({ type: SAVING_SMURFS });
    createSmurf
      .then(response => dispatch({type: SMURFS_SAVED, payload: response.data}))
      .catch(err => dispatch({type: ERROR, payload: err}))
  }
}

export const deleteSmurf = (id) => {
  const removeSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`)
  return function (dispatch) {
    dispatch({type: DELETING_SMURF});
    removeSmurf
      .then(response => dispatch({type: SMURF_DELETED, payload: response.data}))
      .catch(err => dispatch({type: ERROR, payload: err}))
  }
}

export const updateSmurf = (id, obj) => {
  const modifySmurf = axios.put(`http://localhost:3333/smurfs/${id}`, obj)
  return function (dispatch) {
    dispatch({type: UPDATING_SMURF});
    modifySmurf
      .then(response => dispatch({type: SMURF_UPDATED, payload: response.data}))
      .catch(err => dispatch({type: ERROR, payload: err}))
  }
}
