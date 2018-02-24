import axios from 'axios';

export const RECEIVING_SMURFS = 'RECEIVING_SMURFS';
export const RECEIVED_SMURFS = 'RECEIVED_SMURFS';
export const ERROR_RECEIVING = 'ERROR_RECEIVING';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR_ADDING = 'ERROR_ADDING';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const monkeys = axios.get(URL);
  return dispatch => {
    dispatch ({type: RECEIVING_SMURFS});
    monkeys
      .then(( { data }) => {
        dispatch({ type: RECEIVED_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_RECEIVING, payload: err})
        console.log('there was an error', err)
      })
  }
}

export const postSmurf = () => {
  const monkeys = axios.post(URL);
  return dispatch => {
    dispatch ({type: ADDING_SMURF});
    monkeys
      .then(( { data }) => {
        dispatch({ type: ADDED_SMURF, payload: data });
        console.log(data);
      })
      .catch(err => {
        dispatch({ type: ERROR_ADDING, payload: err})
        console.log('there was an error', err)
      })
  }
}