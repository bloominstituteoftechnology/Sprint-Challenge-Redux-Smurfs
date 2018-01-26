/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FIND_SMURFS = 'FIND_SMURFS';
export const SMURFS_FOUND = 'SMURFS_FOUND';
export const ERROR_FINDING_SMURFS = 'ERROR_FINDING_SMURFS';

export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR_ADDING_SMURF = 'ERROR_ADDING_SMURF';

export const UPDATE_SMURF = 'UPDATE_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const ERROR_UPDATING_SMURF = 'ERROR_UPDATING_SMURF';

export const DELETE_SMURF = 'DELETE_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR_DELETING_SMURF = 'ERROR_DELETING_SMURF';
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
export const postSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response =>
        dispatch({ type: SMURF_ADDED, payload: response.data })
      )
      .catch(error =>
        dispatch({ type: ERROR_ADDING_SMURF, payload: error })
      );
  };
};

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FIND_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: SMURFS_FOUND, payload: response.data });
      })
      .catch(error =>
        dispatch({ type: ERROR_FINDING_SMURFS, payload: error })
      );
  };
};

export const updateSmurf = smurf => {
  return dispatch => {
    dispatch({ type: UPDATE_SMURF });
    axios
      .put('http://localhost:3333/smurfs/:id', smurf)
      .then(response => {
        dispatch({ type: SMURF_UPDATED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_UPDATING_SMURF, payload: error });
      });
  };
};

export const deleteSmurf = index => {
  return dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios
      .delete('http://localhost:3333/smurfs/:id', index)
      .then(response => {
        dispatch({ type: SMURF_DELETED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR_DELETING_SMURF, payload: error });
      });
  };
};