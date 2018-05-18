import axios from 'axios';
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  ADDING_SMURF,
  SMURF_ADDED,
  UPDATING_SMURF,
  SMURF_UPDATED,
  DELETING_SMURF,
  SMURF_DELETED,
  ERROR
} from './ActionTypes';

export const getSmurfs = () => {
  const getAllSmurfs = axios.get('http://localhost:3333/smurfs');
  return (dispatch) => {
    dispatch({ type: FETCHING_SMURFS });
    getAllSmurfs
      .then(response => {
        dispatch({
          type: SMURFS_FETCHED,
          payload: response.data
        });}
      )
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const addSmurf = smurfObj => {
  const addNewSmurf = axios.post('http://localhost:3333/smurfs', smurfObj);
  return (dispatch) => {
    dispatch({ type: ADDING_SMURF });
    addNewSmurf
      .then(response => {
        dispatch({
          type: SMURF_ADDED,
          payload: response.data
        });
      }
      )
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const updateSmurf = (smurfId, smurfObj) => {
  const modifySmurf = axios.put(`http://localhost:3333/smurfs/${smurfId}`, smurfObj);
  return (dispatch) => {
    dispatch({ type: UPDATING_SMURF });
    modifySmurf
      .then(response => {
        dispatch({
          type: SMURF_UPDATED,
          payload: response.data
        });
      }
      )
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const deleteSmurf = smurfId => {
  const removeSmurf = axios.delete(`http://localhost:3333/smurfs/${smurfId}`);
  return (dispatch) => {
    dispatch({ type: DELETING_SMURF });
    removeSmurf
      .then(response => {
        dispatch({
          type: SMURF_DELETED,
          payload: response.data
        });
      }
      )
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};
