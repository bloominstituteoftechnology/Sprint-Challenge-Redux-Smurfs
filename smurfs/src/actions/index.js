/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
import { create } from 'domain';
export const FETCH = 'FETCH';
export const FETCHED = 'FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const ADD = 'ADD';
export const ERROR_ADDING = 'ERROR_ADDING';
export const DELETE = 'DELETE';
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
export const getS = () => {
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCH });
    smurfs
      .then(response => {
        dispatch({
          type: FETCHED,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: 'error fetching'
        });
      });
  };
};

export const addS = data => {
  const smurfs = axios.post(`http://localhost:3333/smurfs`, data);
   return dispatch => {
    smurfs
      .then(response => {
        dispatch({ type: ADD, payload: response.data })
      })
      .catch(err => {
        dispatch({
          type: ERROR_ADDING,
          payload: 'error adding'
        });
      });
  };
};
export const removeS = id => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({ type: DELETE });
    smurfs
      .then(response => {
        dispatch(getSmurfs());
      })
      .catch(err => {
        dispatch({
          type: ERROR_DELETING,
          payload: 'error deleting'
        });
      });
  };
};