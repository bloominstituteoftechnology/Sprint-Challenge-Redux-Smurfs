/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
 
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const ADD_SMURFS = 'ADD_SMURFS'
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS'
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE'
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

const url = `http://localhost:3333/smurfs`

export const fetchSmurfs = () => dispatch => {
  dispatch ({ type: FETCH_SMURFS });

  axios 
      .get(url)
      .then(response => {
          dispatch({ type: FETCH_SMURFS_SUCCESS , payload: response.data})
      })
      .catch(error => {
          dispatch ({ type: FETCH_SMURFS_FAILURE, payload: error})
      });
}


export const addSmirfs = smurf => dispatch => {
  dispatch ({ type: ADD_SMURFS });
  axios   
      .post(url,smurf)
      .then (response => {
          dispatch ({ type: ADD_SMURFS_SUCCESS, payload: response.data })
      })
      .catch(error => {
          dispatch ({ type: ADD_SMURFS_FAILURE, payload: error})
      })
}