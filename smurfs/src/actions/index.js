import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURF_FETCHED = 'SMURF_DELETED';

export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';

export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';

export const ERROR = 'ERROR';

export const getSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs/');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    promise.then(response => dispatch({ type: SMURF_FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const addSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs/', smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    promise.then(response => dispatch({ type: SMURF_ADDED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }))
  }
}

export const editSmurf = smurf => {
  const promise = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
  return dispatch => {
    dispatch({ type: UPDATING_SMURF })
    promise.then(response => dispatch({ type: SMURF_UPDATED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const deleteSmurf = id => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    promise.then(response => dispatch({ type: SMURF_DELETED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }))
  }
}
