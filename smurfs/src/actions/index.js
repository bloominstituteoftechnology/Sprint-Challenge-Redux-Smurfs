import axios  from "axios";

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';

export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';

export const UDATING_SMURF = 'UDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';

export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';

export const ERROR = 'ERROR';



export const getSmurfs = () => {
  const getData = axios.get(`http://localhost:3333/smurfs`);
  return function(dispatch) {
    dispatch({type: FETCHING_SMURFS});
    getData
      .then(response => {
        dispatch({type: SMURFS_FETCHED, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
};

export const addSmurf = (smurf) => {
  const postData = axios.post(`http://localhost:3333/smurfs`, smurf);
  return function(dispatch) {
    dispatch({type: ADDING_SMURF});
    postData
      .then(response => {
        dispatch({type: SMURF_ADDED, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
};

export const updateSmurf = (id) => {
  const putData = axios.put(`http://localhost:3333/smurfs/${id}`);
  return function(dispatch) {
    dispatch({type: UPDATING_SMURF});
    putData
      .then(response => {
        dispatch({type: UPDATING_SMURF, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
};

export const deleteSmurf = (id) => {
  const deleteData = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return function(dispatch) {
    dispatch({type: DELETING_SMURF})
    deleteData
      .then(response => {
        dispatch({type: SMURF_DELETED, response: repsonse.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
};
