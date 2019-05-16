import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADD_SMURFS_START = 'ADD_SMURFS_START';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';

export const REMOVE_SMURFS_START = 'REMOVE_SMURFS_START';
export const REMOVE_SMURFS_SUCCESS = 'REMOVE_SMURFS_SUCCESS';
export const REMOVE_SMURFS_FAILURE = 'REMOVE_SMURFS_FAILURE';

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
  dispatch({ type: ADD_SMURFS_START });
  const promise = axios.post('http://localhost:3333/smurfs', smurf)

  promise
    .then(response => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(err => {
      dispatch({ type: ADD_SMURFS_FAILURE, payload: err});
    });
};

export const removeSmurf = id => dispatch => {
  dispatch({ type: REMOVE_SMURFS_START });

  return axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          dispatch({ type: REMOVE_SMURFS_SUCCESS, payload: response.data });
      })
      .catch(err => {
          dispatch({ type: REMOVE_SMURFS_FAILURE, payload: err });
      })
}