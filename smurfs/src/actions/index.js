/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';

export const GET_SMURF = 'GET_SMURF';
export const GETTING_SMURF = 'GETTING_SMURF';

export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs'


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
export const getSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: GETTING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: GET_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  };
};