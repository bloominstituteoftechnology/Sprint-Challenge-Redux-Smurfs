import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(URL);
  return (dispatch) => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then((response) => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}

export const createSmurf = (smurf) => {
  const newSmurf = axios.post(URL, smurf);
  return (dispatch) => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
      .then((response) => {
        dispatch({ type: CREATE_SMURF, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}