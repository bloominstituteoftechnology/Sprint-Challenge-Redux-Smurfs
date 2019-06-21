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

export const addNewSmurf = (newSmurf) => dispatch => {
    console.log('action in addNewSmurf', newSmurf);
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log('.then in addNewSmurf', response.data)
      dispatch({ type: ADD_NEW_SMURF, payload: response.data });
    })
    .catch(error => {
      console.error(error.response.error);
    });
}