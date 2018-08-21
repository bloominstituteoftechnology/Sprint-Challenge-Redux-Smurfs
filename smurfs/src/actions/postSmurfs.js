import axios from 'axios';
import * as smurfTypes from './actionTypes';


export const postSmurfs = smurf => {
    const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
    return dispatch => {
      dispatch({ type: smurfTypes.POSTING_SMURFS });
      newSmurf
        .then(({ data }) => {
          dispatch({ type: smurfTypes.POST_SMURFS, payload: data });
        })
        .catch(err => {
          dispatch({ type: smurfTypes.ERROR_SMURFS, payload: err });
        });
    };
  };