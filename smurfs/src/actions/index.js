/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ERROR = 'ERROR';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURFS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
// export const SINGLE_SMURF = 'SINGLE_SMURF';
// export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';

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

const URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => {
  const smurfs = axios.get(`${URL}/`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs.then(response => {
        dispatch({ type: FETCH_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = (smurf, id) => {
  const newSmurf = axios.post(`${URL}/${id}`, smurf);
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

export const updateSmurf = id => {
  const updateSmurf = axios.put(`${URL}/${id}`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    updateSmurf
      .then(({ data }) => {
        dispatch({ type: UPDATE_SMURF, payload: data });
        // dispatch({ type: SINGLE_SMURF, payload: {} });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteSmurf = id => {
  const deletedSmurf = axios.delete(`${URL}/${id}`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    deletedSmurf
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, payload: data });
        // dispatch({ type: SINGLE_SMURF, payload: {} });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

