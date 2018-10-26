/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING_SMURFS= 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const CREATING_SMURFS="CREATING_SMURFS"; 
export const CREATED_SMURFS="CREATED_SMURFS"; 
export const ERROR ="ERROR"; 

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

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error });
    });
};

export const createFriends = smurf =>{
  const newFriend = axios.post(`http://localhost:3333/smurfs`, smurf); 
  return dispatch => {
      dispatch({ type: CREATING_SMURFS}); 
      newFriend
      .then(({ data }) => {
          dispatch({ type: CREATED_SMURFS, payload: data}); 
      })
      .catch(err =>{
          dispatch({type: ERROR, payload: err}); 
      })
  };
}; 