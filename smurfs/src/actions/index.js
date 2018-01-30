import axios from 'axios';

export const GRABBING_SMURFS = 'GRABBINGS_SMURFS';
export const SMURFS_GRABBED = 'SMURFS_GRABBED';
export const GRABBING_SMURFS_ERROR = 'GRABBING_SMURFS_ERROR';

export const CREATING_SMURF = 'CREATING_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';
export const CREATING_SMURF_ERROR = 'CREATING_SMURF_ERROR';

export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const UPDATING_SMURF_ERROR = 'UPDATING_SMURF_ERROR';

export const KILLING_SMURF = 'KILLING_SMURF';
export const SMURF_KILLED = 'SMURF_KILLED';
export const KILLING_SMURF_ERROR = 'KILLING_SMURF_ERROR';

const url = 'http://localhost:3333/smurfs'

export const grabSmurfs = () => {
  return dispatch => {
    dispatch({type:GRABBING_SMURFS})
    axios.get(url)
    .then(response => {dispatch({type: SMURFS_GRABBED, payload: response.data})})
    .catch(error => {dispatch({type: GRABBING_SMURFS_ERROR, payload: error})});
  };
}

export const createSmurf = smurf => {
  return dispatch => {
    dispatch({type: CREATING_SMURF})
    axios.post(url, smurf)
    .then(response => {dispatch({type: SMURF_CREATED, payload: response.data})})
    .catch(error => {dispatch({type: CREATING_SMURF_ERROR, payload: error})});
  };
}

export const updateSmurf = (smurf, id) => {
  return dispatch => {
    dispatch({type:UPDATING_SMURF})
    axios.put(`${url}/${id}`, smurf)
    .then(response => {
      return axios.get(url)
      .then(response => {dispatch({type: SMURF_UPDATED, payload: response.data})})
    })
    .catch(error => {dispatch({type:UPDATING_SMURF_ERROR, payloard: error})});
  };
}

export const killSmurf = id => {
  return dispatch => {
    dispatch({type: KILLING_SMURF})
    axios.delete(`${url}/${id}`)
    .then(response => {
      return axios.get(url)
      .then(response => {dispatch({type: SMURF_KILLED, payload: response.data})})
    })
    .catch(error => {dispatch({type: KILLING_SMURF_ERROR, payload: error})});
  };
}