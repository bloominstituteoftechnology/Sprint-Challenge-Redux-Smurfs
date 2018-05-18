/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const SMURFS_FETCHING = 'SMURFS_FETCHING';
export const SMURFS_ADD = 'SUMRFS_ADD';
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
  let smurfs = axios.get('http://localhost:3333/smurfs')
  return (dispatch) => {
    dispatch({type: SMURFS_FETCHING})
    smurfs
      .then((data) => dispatch({type: SMURFS_FETCHED, payload: dispatch.data}))
      .catch(error => dispatch({type: ERROR, payload: 'error'}))
  }
}

export const addSmurf = newSmurf => {
  let addSmurf = axios.post('http://localhost:3333/smurfs', newSmurf)
  return (dispatch) => {
    dispatch({type: SMURFS_ADD})
    addSmurf
      .then((data) => dispatch({type: SMURFS_FETCHED, payload: dispatch.data}))
      .catch(error => {
        dispatch({type: ERROR, payload: 'error'})
      })
  }
}