/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF'; 
export const FETCHED_SMURF = 'FETCHED_SMURF'; 
export const ERROR = 'ERROR'; 
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
export const gettingSmurf = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    getSmurfs.then(response => {
      console.log('response data: ', response.data)
      dispatch({ type: FETCHED_SMURF, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}