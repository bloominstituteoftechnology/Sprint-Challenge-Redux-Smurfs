// Axios import
import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// Action exports
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAILURE = 'FETCHING_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
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

export const fetchData = () => dispatch => {
  dispatch({ type: FETCHING_SMURF });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHING_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURF_FAILURE, payload: error });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: error });
    });
};

export const deleteSmurf = (e, id) => dispatch => {
  e.preventDefault();
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: error });
    });
};
