import axios from 'axios';
import { error } from 'util';

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getSmurf  = () => {
  const promist = axios.get('http://localhost:5000/smurfs')
  return dispatch => {
    dispatch({ type: PENDING })
    promise.then(response => {
      console.log(response)
      dispatch({
        type: SUCCESS,
        payload: []
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const addSmurf = smurf => {
  const promise = axios.post('http://localhost:5000/smurfs', smurf)
  return dispatch => {
    dispatch({ type: PEDNING })
    promise.then(response => {
      console.log(response)
      dispatch({
        type: SUCCESS,
        payload: []
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
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
