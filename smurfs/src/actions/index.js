import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';
export const DELETING='DELETING';
export const DELETED='DELETED';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}`);
  return dispatch => {
    dispatch({type: GETTING_SMURFS});
    smurfs.then(response => {
      dispatch({type: GET_SMURFS, payload: response.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

 export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`,smurf);
  console.log(newSmurf);
  return dispatch => {
    dispatch({type:ADDING_SMURF});
    newSmurf
    .then(response => {
      dispatch({type: ADD_SMURF , payload: response.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export const deleteSmurf = id => {
  const request = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({type: DELETING});
    request.then(response => {
      dispatch({type: DELETED, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}