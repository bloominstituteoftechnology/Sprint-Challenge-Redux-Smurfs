import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getSmurf  = () => {
  const promise = axios.get('http://localhost:5000/smurfs')
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const addSmurf = smurf => {
  const promise = axios.post('http://localhost:5000/smurfs', smurf)
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

export const deleteSmurf = smurfID => {
  const promise = axios.delete(`http://localhost:5000/smurfs/${smurfID}`)
  return dispatch => {
    dispatch({ type: DELETING_SMURF })
    promise.then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      })
    })
  }
}

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
