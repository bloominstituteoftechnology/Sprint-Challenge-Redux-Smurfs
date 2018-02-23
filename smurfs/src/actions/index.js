import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const IS_FETCHING = 'IS_FETCHING';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

const URL = 'http://localhost:3333';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/smurfs`);
  return dispatch => {
    dipatch({ type: IS_FETCHING });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURFS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: err});
      });
  };
};

export const IS_ADDING = 'IS_ADDING';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR_ADDING_SMURF = 'ERROR_ADDING_SMURF';

export const addSmurf = (smurf) => {
  const smurfs = axios.post(`${URL}/smurfs`, {...smurf});
  return dispatch => {
    dipatch({ type: IS_FETCHING });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURFS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: err});
      });
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
