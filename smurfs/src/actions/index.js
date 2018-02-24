import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';

const URL = `http://localhost:3333/`;

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/smurfs`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/smurfs`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

// TODO updateSmurf, deleteSmurf

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
