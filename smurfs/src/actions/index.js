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

import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATE_SMURF = 'CREATE_SMURF'
export const CREATING_SMURF = 'CREATING_SMURF';
export const ERROR = 'ERROR'

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then((response) => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

export const createSmurf = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
      .then((response) => {
        dispatch({ type: CREATE_SMURF, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

