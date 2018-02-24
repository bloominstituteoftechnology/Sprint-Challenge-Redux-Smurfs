import axios from 'axios';
export const IS_ADDING = 'IS_ADDING';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR_ADDING_SMURF = 'ERROR_ADDING_SMURFS';

export const createNewSmurf = (newSmurf) => {
  const smurfs = axios.post('http://localhost:3333/smurfs/', { ...newSmurf } );
  return dispatch => {
    dispatch({ type: IS_ADDING });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURF_ADDED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_ADDING_SMURF, payload: err });
      });
  };
};