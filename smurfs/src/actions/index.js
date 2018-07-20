import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED = 'DELETED';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   U - updateSmurf
*/

export const getSmurfs = () => {
  return dispatch => {
    const promise = axios.get(`http://localhost:3333/smurfs`);
      dispatch({ type: FETCHING_SMURFS });
      promise
        .then(res => {
          dispatch({ type: FETCHED, payload: res.data })
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'Error Getting' });
      })
  }
}

export const addSmurf = smurf => {
  const promise = axios.post(`http://localhost:3333/smurfs`, smurf)
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    promise
      .then(({ data }) => {
        dispatch ({ type: ADD_SMURF, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error Adding' });
    })
  }
}

export const deleteSmurf = id => {
  const promise = axios.delete(`http://localhost:3333/smurfs`, {
    data: {id}
  })
  return dispatch => {
    dispatch({ type: DELETING_SMURF })
    promise
    .then(({ data }) => {
      dispatch ({ type: DELETED, payload: data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: 'Error Deleting' });
  })
  }
}