import axios from 'axios';
const URL = 'http://localhost:3333/smurfs'

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING';

export const CREATING_SMURF = 'CREATING_SMURF';
export const SUCCESS_CREATING = 'SUCCESS_CREATING';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SUCCESS_DELETING = 'SUCCESS_DELETING';

export const REJECTED = 'REJECTED';


export const fetchSmurfs = () => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: SUCCESS_FETCHING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error fetching smurfs...' })
      });
  };
};

export const addSmurf = smurf => {
  const promise = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    promise
      .then(response => {
        console.log('RESPONSE', response);
        dispatch({ type: SUCCESS_CREATING, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: REJECTED, payload: 'Error creating smurfs...' })
      });
  };
};

export const deleteSmurf = smurfId => {
  const promise = axios.delete(`${URL}/${smurfId}`);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    promise
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: REJECTED, payload: 'Error deleting smurfs...' })
      });
  };
};
