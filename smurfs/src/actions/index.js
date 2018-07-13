import axios from 'axios';
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

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const KILLING_SMURF = 'KILLING_SMURF';
export const KILLED_SMURF = 'KILLED_SMURF';

export const getSmurfs = URL => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err })
      })
  }
}

export const addSmurf = (URL, smurf) => {
  const create = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
      create
        .then(response => {
          dispatch({ type: ADDED_SMURF, payload: response.data })
        })
        .catch(err => {
          dispatch({ type: ERROR_FETCHING, payload: err })
        })
  }
}

export const killSmurf = (URL, id) => {
  const kill = axios.delete(`${URL}${id}`);
  return dispatch => {
    dispatch({ type: KILLING_SMURF });
    kill
      .then(response => {
        dispatch({ type: KILLED_SMURF, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err })
      })
  }
}
