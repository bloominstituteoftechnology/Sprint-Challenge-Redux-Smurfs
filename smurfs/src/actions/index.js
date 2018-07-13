/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF'
export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF = 'ADD_SMURF';


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

export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');

  return function (dispatch) {
    dispatch({ type: FETCHING_SMURF })
    promise.
      then(response => {
        console.log(response)
        dispatch({ type: GET_SMURF, payload: response.data });
      })
  }
}

export const postSmurfs = (smurfs) => {

  return function (dispatch) {
    dispatch({ type: ADD_SMURF })
    axios.post('http://localhost:3333/smurfs', smurfs).then(response => {
      dispatch(getSmurfs())
    })
  }
}