import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  const promise = axios.get('http://localhost:3333/smurfs');

  promise
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err});
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  const promise = axios.post('http://localhost:3333/smurfs', smurf);

  promise
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err});
    });
};