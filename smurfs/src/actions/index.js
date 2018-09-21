import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
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
    dispatch({ type: FETCHING });
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  }
}

export const addSmurfs = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADDED, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  }
}