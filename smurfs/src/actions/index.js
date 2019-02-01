// we'll need axios
import axios from "axios";
export const GET_SMURF = 'GET_SMURF';
export const GET_SMURFSUCCESS= 'GET_SMURFSUCCESS';
export const GET_SMURFERR= 'GET_SMURFERR';
export const ADD_SMURF = 'ADD_SMURF';

export const fetchSmurfs = () => dispatch => {
    const promise = axios.get('http://localhost:3333/smurfs')
    dispatch({type: GET_SMURF})
    promise
    .then(response => {
        dispatch({type: GET_SMURFSUCCESS, payload: response.data})
    })
    .catch(err => {
        dispatch({type: GET_SMURFERR, payload: err})
    })
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(() => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: GET_SMURFERR, payload: err });
      });
  };
};


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
