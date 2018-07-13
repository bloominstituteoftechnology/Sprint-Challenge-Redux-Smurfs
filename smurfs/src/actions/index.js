/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const REQUESTING = 'REQUESTING';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, REQUESTING, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs/');

  return dispatch => {
    dispatch({
      type: REQUESTING
    });
    request
      .then(res => {
        dispatch({
          type: GET_SMURFS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'Uh oh. Something went wrong'
        });
      });
  };
};

export const addSmurf = smurf => {
  const request = axios.post('http://localhost:3333/smurfs/', smurf);

  return dispatch => {
    dispatch({ type: REQUESTING });
    request
      .then(res => {
        dispatch({
          type: ADD_SMURF,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: ERROR,
          payload: 'Uh oh. Something went wrong'
        });
      });
  };
};

export const deleteSmurf = id => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`);

  return dispatch => {
    dispatch({ type: REQUESTING });
    request
      .then(res =>
        dispatch({
          type: DELETE_SMURF,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: 'Uh oh. Something went wrong'
        })
      );
  };
};

export const updateSmurf = (smurf, id) => {
  const request = axios.put(`http://localhost:3333/smurfs/${id}`, smurf);

  return dispatch => {
    dispatch({
      type: REQUESTING
    });
    request
      .then(res => {
        dispatch({
          type: UPDATE_SMURF,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'Uh oh. Something went wrong'
        });
      });
  };
};
