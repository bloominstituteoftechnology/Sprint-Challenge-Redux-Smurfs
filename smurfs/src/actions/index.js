import axios from 'axios';

export const GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE';
const URL = 'http://localhost:3333/smurfs';

const handleData = (promise, dispatch) => {
  promise
    .then(({ data }) => {
      dispatch({ type: SUCCESS, payload: data });
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};

export const getSmurfs = () => dispatch => {
  const promise = axios.get(URL);
  dispatch({ type: GET });
  handleData(promise, dispatch);
};

export const addSmurf = smurf => dispatch => {
  const promise = axios.post(URL, smurf);
  dispatch({ type: POST });
  handleData(promise, dispatch);
};

export const deleteSmurf = id => dispatch => {
  const promise = axios.delete(`${URL}/${id}`);
  dispatch({ type: DELETE });
  handleData(promise, dispatch);
};

export const updateSmurf = (id, smurf) => dispatch => {
  const promise = axios.put(`${URL}/${id}`, smurf);
  dispatch({ type: PUT });
  handleData(promise, dispatch);
};
