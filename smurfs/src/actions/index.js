import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';
export const DELETING='DELETING';
export const DELETED='DELETED';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
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