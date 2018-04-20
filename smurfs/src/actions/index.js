/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVE = 'SAVE';
export const FAIL = 'FAIL';
export const SAVED = 'SAVED';

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

export const getSmurf = () => {
  const loco = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    loco
    .then(response => {
      dispatch({ type: FETCHED, payload: response.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FAIL});
    })
  }
}

export const addSmurf = data => {
  const create = axios.post(`http://localhost:3333/smurfs`, data);
  return dispatch => {
    create
    .then(response => {
      dispatch({ type: SAVED, payload: response.data })
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FAIL });
    })
  }
}