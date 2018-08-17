import axios from 'axios';

export const GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE';
const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET });
  axios.get(URL)
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST });
  axios.post(URL, smurf)
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};
