/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';

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

export const getSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: GET_SMURFS }); 
    promise.then(response => {
      dispatch({ type: GOT_SMURFS, payload: response.data });
    });
  };
};

export const addSmurf = (smurf) => {
  const post = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    post.then(response => {
      dispatch({ type: ADD_SMURF, payload: response.data });
    });
  };
};