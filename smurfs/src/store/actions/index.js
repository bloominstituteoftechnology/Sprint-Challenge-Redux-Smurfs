import axios from 'axios';

export const SMURFS_FETCH_START = 'SMURFS_FETCH_START';
export const SMURFS_FETCH_SUCCESS = 'SMURFS_FETCH_SUCCESS';
export const SMURFS_FETCH_FAIL = 'SMURFS_FETCH_FAIL';

export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';
export const ADD_SMURF_START = 'ADD_SMURF_START';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_FETCH_START });
  const promise = axios.get('http://localhost:3333/smurfs');

  promise
    .then(response => {
      dispatch({ type: SMURFS_FETCH_SUCCESS, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: SMURFS_FETCH_FAIL, payload: err});
    })
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });

  axios.post('http://localhost:3333/smurfs', smurf)
      .then(response => {
          dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
      }).catch(err => {
          dispatch({ type: ADD_SMURF_FAIL, payload: err });
      });
}