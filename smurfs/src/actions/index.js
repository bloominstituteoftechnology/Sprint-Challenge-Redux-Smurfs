import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const SHOW_UPDATE_FORM = 'SHOW_UPDATE_FORM';
export const HIDE_UPDATE_FORM = 'HIDE_UPDATE_FORM';
export const DATA_ERROR = 'DATA_ERROR';

const API_URL = 'http://localhost:3333/smurfs';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_DATA });
    axios.get(API_URL)
    .then(response => {
      dispatch({ type: DATA_FETCHED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
};

export const addSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: ADDING_SMURF });
    axios.post(API_URL, smurf)
    .then(response => {
      dispatch({ type: SMURF_ADDED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
};

export const updateSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: UPDATING_SMURF });
    axios.put(`${API_URL}/${smurf.id}`, smurf)
    .then(response => {
      dispatch({ type: SMURF_UPDATED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
}

export const deleteSmurf = id => {
  return function(dispatch) {
    dispatch({ type: DELETING_SMURF });
    axios.delete(`${API_URL}/${id}`)
    .then(response => {
      dispatch({ type: SMURF_DELETED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
};

export const showUpdateForm = (smurf) => {   
  return {
    type: SHOW_UPDATE_FORM,
    payload: smurf
  };
};

export const hideUpdateForm = () => {   
  return {
    type: HIDE_UPDATE_FORM
  };
};