import axios from 'axios'; 

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS'; 
export const POSTING_SMURF = 'POSTING_SMURF';
export const POSTED_SMURF = 'POSTED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF'; 
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ERROR = 'ERROR'; 
export const SMURF_CLICKED = 'SMURF_CLICKED';

const url = 'http://localhost:3333/smurfs/';
export const getSmurfs = () => {
  const promise = axios.get(url)
  return dispatch => {
    dispatch({type:FETCHING_SMURFS})
    promise.then(response => {
      dispatch({type: FETCHED_SMURFS, payload: response.data})
    })
    .catch(error => {
      dispatch({type: ERROR, error: error})
    })
  }
}

export const addSmurf = (smurf) => {
  const promise = axios.post(url, smurf); 
  return dispatch => {
    dispatch({type:POSTING_SMURF})
    promise.then(response => {
      dispatch({type: POSTED_SMURF, payload: response.data})
    })
    .catch(error => {
      dispatch({type:ERROR, error: error}) 
    })
  }
}

export const updateSmurf = (id, smurf) => {
  const promise = axios.put(`${url}${id}`, smurf);
  return dispatch => {
    dispatch({type:UPDATING_SMURF})
    promise.then(response => {
      dispatch({type: UPDATED_SMURF, payload: response.data})
    })
    .catch(error => { 
      dispatch({type: ERROR, error: error})
    })
  }
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(`${url}${id}`)
  return dispatch => {
    dispatch({type: DELETING_SMURF})
    promise.then(response => {
      dispatch({type:DELETED_SMURF, payload: response.data})
    })
    .catch(error => {
      dispatch({type:ERROR, error: error})
    })
  }
}

export const clickedSmurf = id => {
  return dispatch => {
    dispatch({type: SMURF_CLICKED, current: id})
  }
}
