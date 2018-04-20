import axios from 'axios';

const URL = 'http://localhost:3333/smurfs';

export const ERROR_FETCHING_SMURF = 'ERROR_FETCHING_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';
export const PENDING_SMURF = 'PENDING_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';
export const ERROR = 'ERROR';
export const CREATE_SMURF = 'CREATE_SMURF';
export const ERROR_SMURF = 'ERROR_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SUCCESS_DELETING = 'SUCCESS_DELETING';

export const getSmurf = () => {
    const promise = axios.get('http://localhost:3333/smurfs');
    return dispatch => {
      dispatch({ type: FETCHING_SMURF });
      promise
        .then(response => {
          dispatch({ type: SUCCESS_SMURF, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'Error Getting Your Smurf' });
        });
    };
  };

  export const createSmurf = smurf => {
    const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
    return dispatch => {
      dispatch({ type: CREATING_SMURF });
      newSmurf
        .then(response => {
          dispatch({ type: SUCCESS_SMURF, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'error creating smurf' });
        });
    };
  };

  export const deleteSmurf = smurfId => {
    const promise = axios.delete(`${URL}/${smurfId}`);
    return dispatch => {
      dispatch({ type: DELETING_SMURF });
      promise
        .then(response => {
          dispatch(getSmurf());
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'error deleting smurf' });
        });
    };
  };

