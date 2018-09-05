/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  return dispatch => {
    axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => {
        console.log('getSmurfs: ', data)
        dispatch({
          type: GET_SMURFS,
          payload: data
        })
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,
        });
      });
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    axios.post('http://localhost:3333/smurfs', {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
      .then(({ data }) => {
        dispatch({
          type: ADD_SMURF,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};