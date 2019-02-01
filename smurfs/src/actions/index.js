import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURF = 'FETCH_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const SMURF_FAILURE = 'SMURF_FAILURE';

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
export const fetchingSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then( response => {
        dispatch({ type: FETCH_SMURF, payload: response.data })
      })
      .catch( error => {
        dispatch({ type: SMURF_FAILURE, payload: error})
      })
  }
}

export const addSmurf = smurf => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    newSmurf
      .then(response  => {
        dispatch({ type: ADD_SMURF, payload: response.data })
      })
      .catch( error => {
        dispatch({ type: SMURF_FAILURE, payload: error})
      })
  }
}