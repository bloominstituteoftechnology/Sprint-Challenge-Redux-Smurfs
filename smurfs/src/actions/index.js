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

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';
export const PUT_SMURF_START = 'PUT_SMURF_START';
export const PUT_SMURF_SUCCESS = 'PUT_SMURF_SUCCESS';
export const PUT_SMURF_ERROR = 'PUT_SMURF_ERROR';
/*
export const  = '';
*/

const url = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(url)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch( {type: FETCH_ERROR}) ;
      console.log(err);
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post(url, smurf)
    .then(response => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch( {type: ADD_SMURF_ERROR});
      console.log(err);
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`${url}/${id}`)
    .then(response => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch( {type: DELETE_SMURF_ERROR});
      console.log(err);
    })
}

export const putSmurf = smurf => dispatch => {
  const { id, ...rest } = smurf;
  dispatch({ type: PUT_SMURF_START });
  axios
    .put(`${url}/${id}`, rest)
    .then(response => {
      dispatch({ type: PUT_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch( {type: PUT_SMURF_ERROR});
      console.log(err);
    })
}