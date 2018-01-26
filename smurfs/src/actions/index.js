import axios from 'axios'
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ERROR = 'ERROR';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
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
  const getSmurfs = axios.get('http://localhost:3333/smurfs')
  return dispatch => {
    dispatch({type: FETCHING_SMURFS})
    getSmurfs
      .then(({data}) => {
        dispatch({type: SMURFS_FETCHED, payload: data})
      }).catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
}

// addSmurfs()