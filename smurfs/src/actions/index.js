import { FETCHING_SMURFS, SMURFS_FETCHED, SAVING_SMURF, SMURF_SAVED, ERROR } from '../action-types';
import axios from 'axios';
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
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({type: SMURFS_FETCHED, payload: response.data});
    })
    .catch(error => dispatch({type: ERROR, payload: "Oops! Couldn't reach the server :("}))
  }
}

export const addSmurf = (smurf) => {
  return function(dispatch) {
    dispatch({type: SAVING_SMURF});
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({type: SMURF_SAVED, payload: response.data})
    })
    .catch(error => dispatch({type: ERROR, payload: "Oops! Couldn't save your smurf :("}))
  }
}
