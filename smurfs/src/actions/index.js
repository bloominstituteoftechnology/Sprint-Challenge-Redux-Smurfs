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
import axios from 'axios'

export const ADDING_SMURF = 'ADD_SMURF'
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF'
export const ADDING_SMURF_FAILURE = 'ADDING_COMPLETE'
export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADDING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ADDING_SMURF_FAILURE , payload: err.response.data.Error }))
}

export const GETTING_SMURFS = 'GETTING_SMURFS'
export const GETTING_SMURFS_SUCCESS = 'GETTING_SMURFS_SUCCESS'
export const GETTING_SMURFS_FAILURE = 'GETTING_SMURFS_FAILURE'
export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GETTING_SMURFS })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GETTING_SMURFS_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err.response))
    .catch((err) => dispatch({ type: GETTING_SMURFS_FAILURE , payload: err }))
}

export const UPDATE_SMURF = 'UPDATE_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATING_COMPLETE = 'UPDATING_COMPLETE'
export const updateSmurf = () => (dispatch) => {}

export const DELETE_SMURF = 'DELETE_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'
export const DELETING_COMPLETE = 'DELETING_COMPLETE'
export const deleteSmurf = () => (dispatch) => {}

export const ERROR_HANDLE = 'ERROR_HANDLE'
export const errorHandle = () => (dispatch) => {}





