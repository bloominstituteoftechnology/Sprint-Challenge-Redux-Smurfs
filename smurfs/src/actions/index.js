import axios from 'axios';

let URL = 'http://localhost:3333/smurfs/';

export const addSmurf = (smurfInfo) => {
  return dispatch => {
    dispatch({ type: 'ADDING_SMURF' });
    axios.post(`${URL}`, smurfInfo)
      .then(response => {
        dispatch({ type: 'SMURF_ADDED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_ADDING_SMURF', payload: error});
      });
  };
};

export const loadSmurfs = () => {
  console.log('loading again');
  return dispatch => {
    dispatch({ type: 'LOADING_SMURFS' });
    axios.get(`${URL}`)
      .then(response => {
        dispatch({ type: 'SMURFS_LOADED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_LOADING_SMURFS', payload: error });
      });
  };
};

export const updateSmurf = (smurfInfo) => {
  return dispatch => {
    dispatch({ type: 'UPDATING_SMURF' });
    axios.put(`${URL}${smurfInfo.id}`, smurfInfo)
      .then(response => {
        dispatch({ type: 'SMURF_UPDATED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_UPDATING_FRIEND', payload: error});
      });
  };
};

export const removeSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'REMOVING_SMURF' });
    axios.delete(`${URL}${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_REMOVED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR_REMOVING_SMURF', payload: error});
      });
  };
};