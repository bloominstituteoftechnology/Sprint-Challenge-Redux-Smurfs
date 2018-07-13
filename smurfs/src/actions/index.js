import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ADD_ERROR = 'ADD_ERROR';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const DELETING_SMURF = 'DELETING_SMURF';


export function fetchSmurfs() {
  return (dispatch) => {
    dispatch({type: FETCHING_SMURFS})
    axios.get('http://localhost:3333/smurfs')
    .then(({data}) => {
      console.log(data);
      dispatch({type: SMURFS_FETCHED, payload: data})
    })
    .catch(err => {
      dispatch({type: FETCH_ERROR, error: err})
    })
  }
}

export function addSmurf(smurf) {
  return (dispatch) => {
    dispatch({type: ADDING_SMURF})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(({data}) => {
      console.log(data);
      dispatch({type: SMURF_ADDED, payload: data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ADD_ERROR, error: err})
    })
  }
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
