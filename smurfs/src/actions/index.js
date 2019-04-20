import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const URL = 'http://localhost:3000';

export const getSmurfs = () => {
  
  return dispatch => {
    dispatch({ type: GETTING_SMURFS })
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: GET_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = smurf => {
  
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    axios.post(`http://localhost:3333/smurfs`,smurf)
      .then( res  => {
        dispatch({ type: CREATE_SMURF, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
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
