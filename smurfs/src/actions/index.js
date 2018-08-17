import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED'
export const ERROR = 'ERROR';

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

export const addSmurf = (id) => {
  const promise = axios.post(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({type: ADDING_SMURF});
    promise 
      .then(response => {
        dispatch({type: SMURF_ADDED, payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: err})
      })
  }
}

export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({type: FETCHING_SMURFS});
    promise 
      .then(response => {
        dispatch({type: SMURFS_FETCHED, payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: err})
      })
  }
}

export const updateSmurf = (id, name, age, height) => {
  const promise = axios.put(`http://localhost:3333/smurfs/${id}`, {name: name, age: age, height: height});
  return dispatch => {
    dispatch({type: UPDATING_SMURF});
    promise 
      .then(response => {
        dispatch({type: SMURF_UPDATED, payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: err})
      })
  }
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({type: DELETING_SMURF});
    promise 
      .then(response => {
        dispatch({type: SMURF_DELETED, payload: response.data})
      })
      .catch(err => {
        console.log(err);
        dispatch({type: ERROR, payload: err})
      })
  }
}
