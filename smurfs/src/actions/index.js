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

export const FETCHING_SMURF = "FETCHING_SMURF"
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS"
export const FETCHING_SMURF_FAIL = "FETCHING_SMURF_FAIL"
export const POSTING_SMURF = "POSTING_SMURF"
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS"
export const POSTING_SMURF_FAIL = "POSTING_SMURF_FAIL"
export const DELETING_SMURF = "DELETING_SMURF"
export const DELETING_SMURF_SUCCESS = "DELETING_SMURF_SUCCESS"
export const DELETING_SMURF_FAIL = "DELETING_SMURF_FAIL"
export const CHANGING_SMURF = "CHANGING_SMURF"
export const CHANGING_SMURF_SUCCESS = "CHANGING_SMURF_SUCCESS"
export const CHANGING_SMURF_FAIL = "CHANGING_SMURF_FAIL"
export const ERROR = "ERROR"

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURF })
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data })
    })
    .catch(e => {
      dispatch({ type: FETCHING_SMURF_FAIL, payload: e })
    })
}

export const postSmurf = (theSmurf) => (dispatch) => {
  dispatch({ type: POSTING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', theSmurf)
    .then(res => {
      dispatch({ type: POSTING_SMURF_SUCCESS, payload: res.data })
    })
    .catch(e => {
      dispatch({ type: POSTING_SMURF_FAIL, payload: e })
    })
}

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: DELETING_SMURF })
  axios
    .delete('http://localhost:3333/smurfs/:id', {
      params: {
        id: id
      }
    })
    .then(res => {
      dispatch({ type: DELETING_SMURF_SUCCESS, payload: res.data })
    })
    .catch(e => {
      dispatch({ type: DELETING_SMURF_FAIL, payload: e })
    })
}

export const changeSmurf = (theSmurf) => (dispatch) => {
  dispatch({ type: CHANGING_SMURF })
}
