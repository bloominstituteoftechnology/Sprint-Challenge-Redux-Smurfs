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

export const SMURFS_FETCH_START = 'SMURFS_FETCH_START';
export const SMURFS_FETCH_COMPLETE = 'SMURFS_FETCH_COMPLETE';
export const SMURFS_FETCH_FAILURE = 'SMURFS_FETCH_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_COMPLETE = 'ADD_SMURF_COMPLETE';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({ type: SMURFS_FETCH_START });
    const promise = axios.get('http://localhost:3333/smurfs');

    promise
        .then(response => {
            dispatch({ type: SMURFS_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: SMURFS_FETCH_FAILURE, payload: err });
        });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF_START });

    axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            dispatch({ type: ADD_SMURF_COMPLETE, payload: response.data });
        }).catch(err => {
            dispatch({ type: ADD_SMURF_FAILURE, payload: err });
        });
}