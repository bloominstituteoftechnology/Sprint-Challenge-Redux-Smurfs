import axios from 'axios';
import * as ActionTypes from './actionTypes';

export const fetchSmurfs = () => {
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: ActionTypes.FETCHING_SMURFS });
    smurfs
      .then(response => {
        dispatch({
          type: ActionTypes.SUCCESS_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ActionTypes.ERROR_SMURFS,
          payload: 'Error fetching smurfs...'
        });
      });
  };
};