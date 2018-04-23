import axios from 'axios';
const URL = 'http://localhost:3333/smurfs';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING';
export const SUCCESS_CREATING = 'SUCCESS_CREATING';
export const CREATING_SMURF = 'CREATING_SMURF';
export const REJECTED = 'REJECTED';
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

export const fetchSmurfs = () => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS});
    promise
      .then(response => {
        console.log('RESPONSE', response);
        dispatch({ type: SUCCESS_FETCHING, payload: []});
      })
      .catch(error => {
          dispatch({type: REJECTED, payload: 'Error fetching smurfs....'})
      });
  };
};

export const addSmurf = smurf => {
  const promise = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURFS});
    promise
      .then(response => {
        console.log('RESPONSE', response);
        dispatch({ type: SUCCESS_CREATING, payload: []});
      })
      .catch(error => {
          dispatch({type: REJECTED, payload: 'Error fetching smurfs....'})
      });
  };
};