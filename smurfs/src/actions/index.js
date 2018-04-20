/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS_FETCHING_SMURFS = 'SUCCESS_FETCHING_SMURFS';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

export const POSTING_SMURFS = 'POSTING_SMURFS';
export const SUCCESS_POSTING_SMURFS = 'SUCCESS_POSTING_SMURFS';
export const ERROR_POSTING_SMURFS = 'ERROR_POSTING_SMURFS';


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

export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return (dispatch) => {
    dispatch( { type: FETCHING_SMURFS });
    promise
    .then((response) => {
      console.log(response);
      dispatch( {type: SUCCESS_FETCHING_SMURFS, payload: ''});
    })
    .catch(err => {
      dispatch( {type: ERROR_FETCHING_SMURFS, payload: 'Error Fetching Data' });
    })
  }
}

export const postSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')
  return (dispatch) => {
    dispatch( { type: POSTING_SMURFS });
    promise
    .then((response) => {
      console.log(response);
      dispatch( {type: SUCCESS_POSTING_SMURFS);
    })
    .catch(err => {
      dispatch( {type: ERROR_POSTING_SMURFS, payload: 'Error Posting Data' });
    })
  }
}