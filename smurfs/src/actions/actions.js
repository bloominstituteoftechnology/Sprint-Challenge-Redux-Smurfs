import * as types from './types';
import axios from 'axios';

const smurfAPI = 'http://localhost:3333/smurfs';

function addSmurfs(smurfs) {
  return {
    type: types.FETCH_SUCCESS,
    payload: smurfs
  };
}

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: types.FETCH_SMURFS });
  axios.get(smurfAPI)  
  .then (res => {
    // dispatch({
    //   type: types.FETCH_SUCCESS,
    //   payload: res.data,
    // });
      dispatch(addSmurfs(res.data));
  })
  .catch(() => {
    dispatch({
      type: types.FETCH_FAIL,
      payload: true,
    });
  });
}

export const postSmurf = newSmurf => dispatch => {
  dispatch({ type: types.ADD_SMURF });
  axios
    .post(smurfAPI, newSmurf)
    .then(() => {
      dispatch(fetchSmurfs());
    })
    .catch(error => {
      console.log(error.message);
    });
};
