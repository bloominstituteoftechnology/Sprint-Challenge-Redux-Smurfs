import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs/');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(payload => {
        dispatch({ type: FETCHED_SMURFS, payload: payload.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addSmurf = newSmurf => {
  const smurfs = axios.post('http://localhost:3333/smurfs/', newSmurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    smurfs
      .then(payload => {
        dispatch({ type: ADDED_SMURF, payload: payload.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const updateSmurf = (updatedSmurf, id) => {
  const smurfs = axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf);
  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    smurfs
      // .then(payload => addSmurf(payload.data))
      .then(deleteSmurf(updatedSmurf, id))
      .then(payload => {
        dispatch({ type: UPDATED_SMURF, payload: payload.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteSmurf = (deletingSmurf, id) => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`, deletingSmurf);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    smurfs
      .then(getSmurfs())
      .then(payload => {
        dispatch({ type: DELETED_SMURF });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
