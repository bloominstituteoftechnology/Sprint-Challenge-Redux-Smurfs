import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const ADD_ERROR = 'ADD_ERROR';

export const addSmurfs = () => dispatch => {
  dispatch({ ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs')
    .then(({ data }) => {
      dispatch({ type: ADDED_SMURFS, smurfs: data });
    })
    .catch(err => {
      dispatch({ type: ADD_ERROR });
    });
};
