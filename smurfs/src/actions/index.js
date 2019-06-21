import axios from 'axios';

export const FETCHING_SMURFS  = 'FETCHING_SMURFS';
export const FETCH_SMURFS_SUCCESS  = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE  = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';




export const fetchSmurfs = () => dispatch => {
  dispatch({type:FETCHING_SMURFS});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>{
      console.log(res.data);
        dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type:FETCH_SMURFS_FAILURE, payload: err}));
}; 

export const addSmurf = (smurf) => dispatch => {
  dispatch({type:ADD_SMURF});
  axios
    .post(`http://localhost:3333/smurfs`,smurf)
    .then(res =>{
      console.log(res.data);
        dispatch({type:ADD_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => dispatch({type:SMURF_FAILURE, payload: err}));
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
