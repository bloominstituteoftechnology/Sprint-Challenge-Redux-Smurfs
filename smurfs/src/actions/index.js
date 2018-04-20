import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
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
  const promise = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: FETCHING});
    promise
      .then(response => {
        dispatch({type: FETCHED, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      })
  }
}
export const addSmurf = (smurf) => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: FETCHED, payload: response.data})
      })
  }
}
