import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_NEW_SMURF = 'ADD_NEW_SMURF'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: error.response.error });
    });
};

export const addNewSmurf = (newSmurf) => {
    console.log('action', newSmurf);
    return {
        type: ADD_NEW_SMURF,
        payload: newSmurf
    }
}