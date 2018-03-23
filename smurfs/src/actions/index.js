import axios from 'axios';

export const FETCHINGSMURF ='FETCHINGSMURF';
export const SMURFSFETCHED ='SMURFSFETCHED';
export const ERRORFETCHINGSMURFS ='ERRORFETCHINGSMURFS';

const URL ='http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: FETCHINGSMURF});
    smurfs
      .then(({data}) => {
        dispatch({type: SMURFSFETCHED, payload: data});
      })
      .catch(error => {
        dispatch({type:ERRORFETCHINGSMURFS, payload:error});
      });
  };
};

export const ADDINGSMURF ='ADDINGSMURF';
export const SMURFADDED  ='SMURFADDED';
export const ERRORADDINGSMURF ='ERRORADDINGSMURF';

export const addSmurf = (smurf) => {
  const smurfs = axios.post(`${URL}`, {...smurf});
  return dispatch => {
    dispatch({type:ADDINGSMURF});
    smurfs
      .then(({data}) => {dispatch({type:SMURFADDED, payload:data});})
      .catch(error => {dispatch({type:ERRORADDINGSMURF, payload:error});});
  };
};