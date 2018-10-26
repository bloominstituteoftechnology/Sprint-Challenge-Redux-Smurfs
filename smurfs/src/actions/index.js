
import axios from 'axios';

export const GETTING_SMURFS = 'ADDING_SMURFS';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
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

export export const getSmurfs = () => (dispatch) => {
  dispatch({type: GETTING_SMURFS});

  axios.get('http://localhost:3333/smurfs')
       .then(response => { console.log(response)
         dispatch({ type: GET_SUCCESS, payload: response.data})})
       
       .catch(err => dispatch({type: ERROR, payload: err}))
}

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({type: DELETING_SMURF})
  axios.delete(`http://localhost:3333/smurfs/${id}`)
       .then(response => dispatch({type: DELETE_SUCCESS, payload: response.data}))
       .catch(err => dispatch({type: ERROR, payload: err}))

  
}
export const addSmurf = (smurf) => (dispatch) => {
  dispatch({type: ADDING_SMURF});

  axios.post('http://localhost:3333/smurfs', smurf)
       .then(response => { console.log(response)
         dispatch({ type: ADD_SUCCESS, payload: response.data})})
       
       .catch(err => dispatch({type: ERROR, payload: err}))
}

export const updateSmurf = (id, smurf) => (dispatch) => {
  dispatch({type: UPDATING_SMURF});

  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
       .then(response => { console.log(response)
         dispatch({ type: UPDATE_SUCCESS, payload: response.data})})
       
       .catch(err => dispatch({type: ERROR, payload: err}))
}
