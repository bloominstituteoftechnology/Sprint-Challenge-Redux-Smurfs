import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING = 'FETCHING';
export const ERROR_GETTING_SMURFS = 'ERROR_GETTING_SMURFS';

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
    const smurfs = axios.get('http://localhost:5000/smurfs/');
    return dispatch => {
        dispatch({type: FETCHING});
        smurfs
            .then(response => {
                dispatch({type: GET_SMURFS, payload: response.data});
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_SMURFS, payload: err});
            });
    };
};

export const addSmurfs = () => {

};

export const updateSmurfs = () => {

};

export const deleteSmurf = () => {

};

