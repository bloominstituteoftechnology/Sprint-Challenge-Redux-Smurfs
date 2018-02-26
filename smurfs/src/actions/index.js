import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATE_SMURF = 'CREATE_SMURF'
export const CREATING_SMURF = 'CREATING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DESTROY_SMURF = 'DESTROY_SMURF';
export const DESTROYING_SMURF = 'DESTROYING_SMURF';
export const ERROR = 'ERROR'

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then((response) => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

export const createSmurf = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
      .then((response) => {
        dispatch({ type: CREATE_SMURF, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

export const updateSmurf = (smurf) => {
  const updatedSmurf = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    updatedSmurf
      .then((response) => {
        dispatch({ type: UPDATE_SMURF, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}

export const destroySmurf = (id) => {
  const doomedSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({ type: DESTROYING_SMURF });
    doomedSmurf
      .then((response) => {
        dispatch({ type: DESTROY_SMURF, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error});
      })
  }
}

