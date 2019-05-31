/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// export const ADD_SMURFS = 'ADD_SMURFS';
import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
// export const UPDATE_SMURFS = 'UPDATE_SMURFS';
// export const DELETE_SMURFS = 'DELETE_SMURFS';


export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
    // console.log("DATA: ", response.data)
    dispatch({ type: FETCH_SMURFS_SUCCESS , payload: response.data})
  })
  .then()
  .catch(err => {
    dispatch({ type: FETCH_SMURFS_FAILURE, payload: err })
  })
}

export const addSmurf = data => dispatch => {
  dispatch({ type: ADDING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', data)
    .then(response => {
    // console.log("DATA: ", response.data)
    dispatch({ type: ADD_SMURF_SUCCESS , payload: response.data})
  })
  .then()
  .catch(err => {
    dispatch({ type: ADD_SMURF_FAILURE, payload: err })
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
