import axios from 'axios';

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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR = 'ERROR';

const url = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
  const smurfData = axios.get(url);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfData
      .then(results => {
        dispatch({ type: SMURFS_FETCHED, payload: results.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
  };
};

export const addSmurf = smurf => {
  const smurfPull = axios.post(url, smurf);
  return dispatch => {
    dispatch({type: ADDING_SMURF})
      smurfPull
        .then(results => {
          dispatch({ type: SMURF_ADDED, payload: results.data});
        })
        .catch(err => {
          dispatch({type: ERROR, payload: err});
        })
  };
};




