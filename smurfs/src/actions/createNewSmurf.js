import axios from 'axios';
export const IS_SAVING = 'IS_SAVING';
export const SMURF_SAVED = 'SMURF_SAVED';
export const ERROR_SAVING_SMURFS = 'ERROR_SAVING_SMURFS';

export const createNewSmurf = (newSmurfObj) => {
  const smurfs = axios.post('http://localhost:3333/smurfs/', newSmurfObj );
  return dispatch => {
    dispatch({ type: IS_SAVING });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURF_SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING_SMURFS, payload: err });
      });
  };
};