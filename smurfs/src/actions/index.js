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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

//fetches smurfs from API
export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
        .get('http://localhost:3333/smurfs')
        .then((response) => {
            dispatch({
                type: FETCHING_SMURFS_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: FETCHING_SMURFS_FAILURE,
                payload: err
            });
        });
};

//add smurf to API
export const addSmurf = (newSmurf) => dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then((response) => {
            //console.log('response, ', response);
            dispatch({
                type: ADD_SMURF_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: err
            });
        });
};
