import axios from 'axios';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURFS' });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: 'SMURFS_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: 'ADDING_SMURF' });
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        dispatch({ type: 'SMURF_ADDED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURF' });
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const editSmurf = (editedSmurf) => {
  return dispatch => {
    dispatch({ type: 'EDITING_SMURF' });
    axios
      .put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
      .then(response => {
        dispatch({ type: 'SMURF_EDITED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'DELETING_SMURF' });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_DELETED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
