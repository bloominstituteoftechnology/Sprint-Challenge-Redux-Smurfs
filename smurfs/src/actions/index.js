import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = 'ADD_SMURF'
export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHED_SMURFS = 'FETCHED_SMURFS'
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


export const fetchingSmurfs = () => {
  let get = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    get.then(response => {
      dispatch({ type: FETCHED_SMURFS, payload: response.data })
    });
  }
}

export const addSmurf = () => {
  let post = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    post.then(response => {
      dispatch({ type: ADD_SMURF, payload: response.data})
    });
  }
}