import axios from 'axios';

export const FETCHSMURF ='FETCHSMURF';
export const SMURFFETCHED ='SMURFFETCHED';
export const ERRORFETCHING ='ERRORFETCHING';

const URL ='http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: FETCHSMURF});
    smurfs
      .then(({data}) => {
        dispatch({type: SMURFFETCHED, payload: data});
      })
      .catch(error => {
        dispatch({type:ERRORFETCHING, payload:error});
      });
  };
};

export const ADDSMURF ='ADDSMURF';
export const SMURFADDED  ='SMURFADDED';
export const ERRORADDING ='ERRORADDING';

export const addSmurf = (smurf) => {
  const smurfs = axios.post(`${URL}`, {...smurf});
  return dispatch => {
    dispatch({type:ADDSMURF});
    smurfs
      .then(({data}) => {dispatch({type:SMURFADDED, payload:data});})
      .catch(error => {dispatch({type:ERRORADDING, payload:error});});
  };
}; 
