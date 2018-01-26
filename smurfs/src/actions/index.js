import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const SMURFS_RECEIVED = 'SMURFS_RECEIVED';
export const SMURF_ADDED = 'SMURF_ADDED';
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

export const getSmurfs = () => {
  return dispatch => {
    axios.get('http://localhost:3333/smurfs')
      .then(({smurfs}) => {
        console.log('RESPONSE: ', {smurfs});
        dispatch({ type: SMURFS_RECEIVED, payload: smurfs })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}