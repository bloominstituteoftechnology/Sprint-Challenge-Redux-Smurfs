import axios from 'axios'

export const FETCHING_SMURF = 'FETCHING_SMURF'
export const SMURF_FETCHED = 'SMURF_FETCHED'
export const SMURF_FAILURE = 'SMURF_FAILURE'
export const ADD_SMURF = 'ADD_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

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

export const getSmurf = () => dispatch => {
  dispatch({type: FETCHING_SMURF})
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
    dispatch({type: SMURF_FETCHED, payload: response.data})
  })
  .catch(error => {
    dispatch({type: SMURF_FAILURE, payload: error})
  })
}

export const addSmurf = smurf => dispatch => {
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(response => {
    dispatch({type: ADD_SMURF, payload: response.data})
  })
  .catch(error => alert(error))
}

export const deleteSmurf = id => dispatch => {
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => {
    dispatch({type: DELETE_SMURF, payload: response.data})
  })
  .catch(error => alert(error))
}