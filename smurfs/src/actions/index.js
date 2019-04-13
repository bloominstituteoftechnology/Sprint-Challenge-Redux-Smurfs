/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';
export const ADD_SMURFS_START = 'ADD+SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD+SMURFS_SUCCESS';
export const ADD_SMURFS_FAIL = 'ADD+SMURFS_FAIL';


export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: GET_SMURFS_FAIL, payload: err });
    })
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        dispatch({ type: ADD_SMURFS_FAIL, payload: err });
    })
}
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
