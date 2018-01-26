import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const SMURFS_FETCHING_ERROR = 'SMURFS_FETCHING_ERROR';

export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const SMURF_ADDED_ERROR = 'SMURG_ADDED_ERROR';

export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const SMURF_UPDATING_ERROR = 'SMURF_UPDATING_ERROR';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const SMURF_DELETING_ERROR = 'SMURF_DELETING_ERROR';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS })
    axios.get('http://localhost:3333/smurfs')
    .then(({ data }) => {
      dispatch({ type: SMURF_FETCHED, payload: data })
    })
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF })
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(({ data }) => {
      dispatch({ type: SMURF_ADDED })
    })
    .then(() => {
      dispatch({ type: FETCHING_SMURFS })
      axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => {
        dispatch({ type: SMURF_FETCHED, payload: data })
      })
    })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
    }
  }

  export const deleteSmurf = id => {
    return dispatch => {
      dispatch({ type: DELETING_SMURF })
      axios.delete('http//localhost:3333/smurf/${id}')
    }
  }
