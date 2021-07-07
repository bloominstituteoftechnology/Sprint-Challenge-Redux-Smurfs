/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ERROR = 'ERROR';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';


const URL = 'http://localhost:3333/smurfs';

// return dispatch => {
//   dispatch({ type: FOO_ACTION_TYPE });
//   promise.then(({ data }) => {
//     dispatch({ type: ANOTHER_ACTION_TYPE, payload: data });
//   });
// };

export const fetchSmurfs = () => {
  const smurfs = axios.get(URL);
    
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: FETCH_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

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
