/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
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
  const smurfs = axios.get('http://localhost:3333/smurfs/');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(allSmurfs => {
        dispatch({ type: FETCHED_SMURFS, payload: allSmurfs.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = smurf => {
  const smurfs = axios.post('http://localhost:3333/smurfs/', smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    smurfs
      .then(allSmurfs => {
        dispatch({ type: ADDED_SMURF, payload: allSmurfs.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
