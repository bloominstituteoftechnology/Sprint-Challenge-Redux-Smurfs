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

export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILED = 'GET_SMURF_FAILED';

export function getSmurf() {
  return (dispatch) => {
    dispatch({ type: GET_SMURF_START })

    axios.get("http://localhost:3000/smurfs")
      .then((res) => {
        dispatch({ type: GET_SMURF_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: GET_SMURF_FAILED, payload: err.response.data })
      })
  }
}