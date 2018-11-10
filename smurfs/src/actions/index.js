import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, error: err });
    });
};
