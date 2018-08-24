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

import axios from "axios";

export const GETTING_SMURFS = 'GETTING_SMURFS'
export const GOT_SMURFS = 'GOT_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'
export const ERROR = 'ERROR'

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: GOT_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = (newSmurf) => {
  const smurfs = axios.post(`${URL}`, newSmurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    smurfs
      .then(res => {
        dispatch({ type: ADDED_SMURF, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};