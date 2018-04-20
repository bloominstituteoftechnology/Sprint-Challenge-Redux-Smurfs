/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
import { create } from 'domain';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR_ADDING = 'ERROR_ADDING';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR_DELETING = 'ERROR_DELETING';
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
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCH_SMURFS });
    smurfs
      .then(response => {
        dispatch({
          type: FETCHED_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: 'ERROR Fetching Smurfs'
        });
      });
  };
};

export const addSmurf = data => {
  const smurfs = axios.post(`http://localhost:3333/smurfs`, data);
    return dispatch => {
      smurfs
      .then(response=> {
        dispatch({ type: ADD_SMURF, payload: response.data })
      })
      .catch(err => {
        dispatch({
          type: ERROR_ADDING,
          payload: 'ERROR adding Smurf'
        });
      });
    };
};

export const removeSmurf = id => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`);
    return dispatch => {
      dispatch({ type: DELETE_SMURF });
      smurfs
      .then(response=> {
        dispatch(getSmurfs());
      })
      .catch(err => {
        dispatch({
          type: ERROR_DELETING,
          payload: 'ERROR deleting Smurf'
        });
      });
    };
};