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
    .then(({data}) => {
        dispatch({type: GET_SMURFSUCCESS, payload: data})
    })
    .catch(err => {
        dispatch({type: FRIENDS_ERR, payload: err})
    })
}

export const addSmurf= (value) => {
    return {
      type: ADD_SMURF,
      payload: value
    };
  };

  export const updateSmurf= (id) => {
    return {
      type: UPDATE_SMURF,
      payload: id
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
