import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_FETCHED = 'DATA_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const DATA_ERROR = 'DATA_ERROR';

export const fetchData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_DATA });
    axios.get('http://localhost:5000/smurf')
    .then(response => {
      dispatch({ type: DATA_FETCHED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
};

export const addSmurf = (smurf) => {
  return function(dispatch) {
    dispatch({ type: ADDING_SMURF });
    axios.post('http://localhost:5000/smurf', smurf)
    .then(response => {
      dispatch({ type: SMURF_ADDED, payload: response.data });
    })
    .catch(e => dispatch({ type: DATA_ERROR, payload: e }));
  };
};