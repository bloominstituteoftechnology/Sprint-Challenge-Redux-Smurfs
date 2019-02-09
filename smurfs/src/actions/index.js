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

export const FETCHING_SMURFS = "FETCHING_SMURFS"
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_ERROR = "FETCHING_ERROR"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res)
    dispatch({ type: FETCHING_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: FETCHING_ERROR, payload: err })
  })
}