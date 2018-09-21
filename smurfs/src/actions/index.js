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

export const ADD_SMURF = 'ADD_SMURF'
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDING_COMPLETE = 'ADDING_COMPLETE'

export const GET_SMURFS = 'GET_SMURFS'
export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHING_COMPLETE = 'FETCHING_COMPLETE'

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: ADDING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
    .then(() => dispatch({ type: ADDING_COMPLETE }))
    .catch(err => console.log(err))
}

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GET_SMURFS, payload: res.data }))
    .then(() => dispatch({ type: FETCHING_COMPLETE }))
    .catch(err => console.log(err))
}

// export const UPDATE_SMURF = 'UPDATE_SMURF'
// export const UPDATING_SMURF = 'UPDATING_SMURF'
// export const UPDATING_COMPLETE = 'UPDATING_COMPLETE'
// export const updateSmurf = () => (dispatch) => {}

// export const DELETE_SMURF = 'DELETE_SMURF'
// export const DELETING_SMURF = 'DELETING_SMURF'
// export const DELETING_COMPLETE = 'DELETING_COMPLETE'
// export const deleteSmurf = () => (dispatch) => {}

// export const ERROR_HANDLE = 'ERROR_HANDLE'
// export const errorHandle = () => (dispatch) => {}





