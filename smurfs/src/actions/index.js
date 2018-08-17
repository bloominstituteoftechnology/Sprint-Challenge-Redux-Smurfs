import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const POSTING_SMURF = 'POSTING_SMURF';
export const POSTED_SMURF = 'POSTED_SMURF';
export const ERROR = 'ERROR';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';


const URL = `http://localhost:3333/smurfs/`;

export const getSmurfs = () => {
  const data = axios.get(URL);
  return (dispatch) => {
    dispatch({type: GETTING_SMURFS});
    data
    .then(response => {
      dispatch({
        type: GOT_SMURFS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}

export const postSmurf = (smurf) => {
  const data = axios.post(URL, smurf);
  return (dispatch) => {
    dispatch({type: POSTING_SMURF});
    data
    .then(response => {
      dispatch({
        type: POSTED_SMURF,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}

export const updateSmurf = () => {
  const data = axios.put(URL);
  return (dispatch) => {
    dispatch({type: UPDATING_SMURF});
    data
    .then(response => {
      dispatch({
        type: UPDATED_SMURF,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}

export const deleteSmurf = (id) => {
  const data = axios.delete(`${URL}${id}`);
  return (dispatch) => {
    dispatch({type: DELETING_SMURF});
    data
    .then(response => {
      dispatch({
        type: DELETED_SMURF,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
  }
}
