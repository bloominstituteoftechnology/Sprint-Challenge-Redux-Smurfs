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
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

const URL = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_ERROR, error: err })
    })
}
 export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios 
    .post(URL, smurf)
    .then(response => {
      dispatch({ type: ADD_SUCCESS, results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: FETCH_ERROR, error: err })
    })
}
 export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios 
    .delete(`${URL}/${id}`)
    .then (response => {
      dispatch({ type: DELETE_SUCCESS, results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: DELETE_ERROR, error: err })
    })
}
