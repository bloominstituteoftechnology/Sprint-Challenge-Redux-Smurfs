import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const FETCHING_SMURFS_ERROR = 'FETCHING_SMURFS_ERROR';

export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ADDING_SMURF_ERROR = 'ADDING_SMURF_ERROR';

export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const UPDATING_SMURF_ERROR = 'UPDATING_SMURF_ERROR';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const DELETING_SMURF_ERROR = 'DELETING_SMURF_ERROR';



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
const url = 'http://localhost:3333/smurfs'

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURFS})
    axios.get(url)
    .then(response => {dispatch({type: SMURFS_FETCHED, payload: response.data})})
    .catch(error => {dispatch({type: FETCHING_SMURFS_ERROR, payload: error})})
    
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: ADDING_SMURF})
    axios.post(url, smurf)
    .then(response => {dispatch({type: SMURF_ADDED, payload: response.data})})
    .catch(error => {dispatch({type: ADDING_SMURF_ERROR, payload: error})});
  }
}

export const updateSmurf = (smurf, id) => {
  return dispatch => {
    dispatch({type: UPDATING_SMURF})
    axios.put(`${url}/${id}`, smurf)
    .then(response => {
      return axios.get(url)
      .then(response => {dispatch({type: SMURF_UPDATED, payload: response.data})})
    })
    .catch(error => {dispatch({type: UPDATING_SMURF_ERROR, payload: error})})
  }
}

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({type: DELETING_SMURF})
    axios.delete(`${url}/${id}`)
    .then(response => {
      return axios.get(url)
      .then(response => {dispatch({type: SMURF_DELETED, payload: response.data})})
    })
    .catch(error => {dispatch({type: DELETING_SMURF_ERROR, payload: error })})
  }
}
