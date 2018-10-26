import axios from 'axios';

export const FETCH_COMPLETE = 'FETCH_COMPLETE';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const CLEAR_SMURF = 'CLEAR_SMURF';

export const singleSmurf = smurf => {
  return {
    type: SINGLE_SMURF,
    payload: smurf
  };
};

export const clearSingleSmurf = () => {
  return {
    type: CLEAR_SMURF
  };
};

export const updateSmurf = (smurf, id) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => dispatch({ type: UPDATE_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};

export const fetchSmurfs = () => dispatch => {
  let url = 'http://localhost:3333/smurfs';
  axios
    .get(url)
    .then(res => dispatch({ type: FETCH_COMPLETE, payload: res.data }))
    .catch(err => console.log(err));
};

export const addSmurf = smurf => dispatch => {
  let url = 'http://localhost:3333/smurfs';
  axios
    .post(url, smurf)
    .then(res => dispatch({ type: ADD_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};
export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETE_SMURF, payload: res.data }))
    .catch(err => console.log(err));
};
