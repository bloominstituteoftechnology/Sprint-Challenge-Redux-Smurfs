// Action Types and Import Axios
import axios from 'axios';
export const PENDING_SMURFS = 'PENDING_SMURFS';
export const SUCCESS_SMURFS = 'SUCCESS_SMURFS';
export const ERROR_SMURFS = 'ERROR_SMURFS';

// Action Types Functions

export const fetchSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/api/smurfs');
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        dispatch({
          type: SUCCESS_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_SMURFS,
          payload: 'ERROR GETTING SMURFS'
        });
      });
  };
};
