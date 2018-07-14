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


import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURFS_FETCHED = 'SMURFS_FETCHED'
export const SMURFS_FETCH_ERROR = 'SMURFS_FETCH_ERROR'

export const POSTING_SMURF = 'POSTING_SMURF'
export const SMURF_POSTED = 'SMURF_POSTED'
export const SMURF_POSTING_ERROR = 'SMURF_POSTING_ERROR'

export const DELETING_SMURF = 'DELETING_SMURF'
export const SMURF_DELETED = 'SMURF_DELETED'
export const SMURF_DELETING_ERROR = 'SMURF_DELETING_ERROR'

export const FETCHING_SMURF = 'FETCHING_SMURF'

const baseURL = 'http://localhost:3333/smurfs/'

export function getSmurfs(){
  return function(dispatch) {
    dispatch({type:FETCHING_SMURFS});
    return axios
      .get(baseURL)
      .then(( {data} ) => {
        dispatch({ type: SMURFS_FETCHED, payload:data });
      })
      .catch(err => {
        dispatch({ type: SMURFS_FETCH_ERROR, payload:err });
      });
  };
}

export function postSmurf(newSmurf){
  return function(dispatch){
    dispatch({type:POSTING_SMURF});

    axios
      .post(baseURL, newSmurf )
      .then(({ data }) => {
        dispatch({ type: SMURF_POSTED, payload:data });
      })
      .catch(err => {
        dispatch({ type: SMURF_POSTING_ERROR, payload:err });
      });
  }
}

export function deleteSmurf(id){
  return function(dispatch){
    dispatch({type:DELETING_SMURF});

    axios
      .delete( baseURL+id )
      .then(({ data }) => {
        dispatch({ type: SMURF_DELETED, payload:data });
      })
      .catch(err => {
        dispatch({ type: SMURF_DELETING_ERROR, payload:err });
      });
  }
}

export function getSmurf(id){
  return {
    type:FETCHING_SMURF,
    payload:id
  }
  // return function(dispatch) {
  //   dispatch({type:FETCHING_SMURF});

  //   axios
  //     .get(baseURL+id)
  //     .then(({ data }) => {
  //       dispatch({ type: SMURF_FETCHED, payload:data });
  //     })
  //     .catch(err => {
  //       dispatch({ type: SMURF_FETCH_ERROR, payload:err });
  //     });
  // };
}