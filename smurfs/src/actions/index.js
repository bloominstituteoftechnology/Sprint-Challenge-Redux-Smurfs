import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const SAVING_SMURFS = 'SAVING_SMURFS';
export const SAVED_SMURFS = 'SAVED_SMURFS';
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
export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    const promise = axios.get('http://localhost:3333/smurfs')
    promise 
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const saveSmurf = smurf => {
  return dispatch => {
    dispatch({ type: SAVING_SMURFS })
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ tpye: SAVED_SMURFS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};