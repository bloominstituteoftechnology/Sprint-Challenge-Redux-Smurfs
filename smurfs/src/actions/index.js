export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR_THROWN = 'ERROR_THROWN';
export const YAY_SUCCESS = 'YAY_SUCCESS';
export const URL = 'http://localhost:3333/smurfs';

import { thunk } from 'react-thunk';


export const gettingSmurf = () => {
  const getSmurf = axios.get(URL);
  return dispatch => 
    dispatch({type: GET_SMURF});
    getSmurf
    .then(response => {
      dispatch({type: YAY_SUCCESS, payload: response.data})
    })
    .catch(err =>{
      dispatch({type: ERROR_THROWN, payload: "Error getting smurf"})
    })
  }

export const addingSmurf = (smurf) => {
  const addSmurf = axios.post(URL, smurf);
  return dispatch => 
    dispatch({type: ADD_SMURF});
    addSmurf
    .then(response => {
      console.log(response);
      dispatch({type: YAY_SUCCESS, payload: response.data})
    })
    .catch(err =>{
      dispatch({type: ERROR_THROWN, payload: "Error adding smurf"})
    })

export const updatingSmurf = () => {
  const updateSmurf = axios.update(URL);
  return dispatch =>
    dispatch({type: UPDATE_SMURF});
    updateSmurf
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      dispatch({type: ERROR_THROWN, payload: "Error updating smurf"})
    })
  }
export const deletingSmurf = () => {
  const deleteSmurf = axios.delete(URL);
  return dispatch =>
    dispatch({type: DELETE_SMURF})
    .then(response => {
      console.log(response)
    })
    .catch(response => {
      dispatch({type: ERROR_THROWN, payload: "Error deleting smurf"})
    })

  }

  
}


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
