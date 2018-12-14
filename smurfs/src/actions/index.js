import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURF = 'FETCH_SMURF';
export const SMURF_FETCHED = 'SMURF_FETCHED';

export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';

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

const url = 'http://localhost:3333/'

export const fetchSmurf = () => dispatch => {
  dispatch({
    type: FETCH_SMURF
  })
  axios
  .get(`${url}smurfs`)
  .then(response => {
    dispatch({
      type: SMURF_FETCHED, 
      payload: response.data
    })
  })
  .catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}

export const addSmurf = dispatch => smurf => {
  dispatch({
    type: ADD_SMURF
  })
  axios
  .post(`${url}smurfs`, smurf)
  .then(response => {
    dispatch({
      type: SMURF_ADDED,
      payload: response.data
    })
  })
  .catch(err => {
    dispatch({
      type: ERROR,
      payload: err
    })
  })
}
