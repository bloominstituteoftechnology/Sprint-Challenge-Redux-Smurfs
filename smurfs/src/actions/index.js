/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ERROR = 'ERROR';
export const ADD_SMURFS = 'ADD_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS = 'SUCCESS';


const URL = 'http://localhost:3333/smurfs';

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



export const addSmurfs = () => {
  const smurfs = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: ADD_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: ADD_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// C- add smurf here
export const createSmurf = smurf => {
  const addSmurf = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: ADD_SMURFS });
    addSmurf
      .then(response => {
        console.log(response.data);
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: 'Could not Add Smurf' });
      });
  };

};

//R- getSmurfs
export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: GET_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// D- Delete Smurf 
export const deleteSmurf = id => {
  const deleteSmurf = axios.delete(`${URL}/delete`);
    return dispatch => { 
      dispatch({ type: DELETE_SMURF });
      deleteSmurf
        .then(response => {
          dispatch({ type: DELETE_SMURF, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    };
};


//fetching as part of component
export const fetchSmurfs = () => {
  const getSmurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: 'Cannot Fetch Smurfs' });
      });  
  };
};
