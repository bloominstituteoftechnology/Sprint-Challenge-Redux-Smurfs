import axios from 'axios';
export const FETCH = 'FETCH';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FETCH = 'ADD_FETCH';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';
export const DELETE_FETCH = 'DELETE_FETCH';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';
export const UPDATE_FETCH = 'UPDATE_FETCH';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';
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
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH});
  console.log('fetched');
  axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
          dispatch({ type: SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: FAILURE, payload: err });
      })
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADD_FETCH});
  axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
          dispatch({ type: ADD_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: ADD_FAILURE, payload: err });
      })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_FETCH});
  axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          dispatch({ type: DELETE_SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: DELETE_FAILURE, payload: err });
      })
}

export const updateSmurf = (id, newSmurf) => dispatch => {
  dispatch({ type: FETCH});
  axios
      .put(`http://localhost:3333/smurfs/${id}`, newSmurf)
      .then(response => {
          dispatch({ type: SUCCESS, payload: response.data});
      })
      .catch(err => {
          dispatch({ type: FAILURE, payload: err });
      })
}