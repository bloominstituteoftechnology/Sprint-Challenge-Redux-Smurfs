/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
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

export const GET_SMURF = 'GET_SMURF'
export const GOT_SMURF = 'GOT_SMURF'

export const CREATING_SMURF = 'CREATING_SMURF'
export const CREATED_SMURF = 'CREATED_SMURF'

export const ERROR = 'ERROR'

export const getSmurf = () => {
  const promise = axios.get('http://localhost:3333/smurfs')

  return dispatch => {
    dispatch({type: GET_SMURF});
    promise.then((response) => {
      console.log(response.data)
      dispatch({type: GOT_SMURF, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const createSmurf = (smurf) => {
  const promise = axios.get('http://localhost:3333/smurfs', smurf)

  return dispatch => {
    dispatch({type: CREATING_SMURF});
    promise.then((response) => {
      console.log(response)
      dispatch({type: CREATED_SMURF, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}