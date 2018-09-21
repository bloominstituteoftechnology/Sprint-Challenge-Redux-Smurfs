import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: GETTING_SMURFS});
    smurfs.then(response => {
      dispatch({type: GET_SMURFS, payload: response.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`,smurf);
  console.log(newSmurf);
  return dispatch => {
    dispatch({type:ADDING_SMURF});
    newSmurf
    .then(response => {
      dispatch({type: ADD_SMURF , payload: response.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

  //  C - addSmurf
  //  R - getSmurfs
  //  U - updateSmurf
  //  D - deleteSmurf