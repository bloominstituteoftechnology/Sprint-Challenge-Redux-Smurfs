import axios from 'axios';

export const GET_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS_SUCCESS = 'GETTING_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GETTING_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({
        type: GET_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_SMURFS_FAILURE,
        payload: error
      });
    });
};

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const addSmurf = smurf => dispatch => {
  console.log('smurf', smurf);
  dispatch({
    type: ADD_SMURF
  });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      console.dir(error);
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      });
    });
};