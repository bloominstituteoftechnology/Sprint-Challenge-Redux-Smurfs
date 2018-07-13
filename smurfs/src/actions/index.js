import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ADD_ERROR = 'ADD_ERROR';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const DELETE_ERROR = 'DELETE_ERROR';
export const TOGGLE_FORM = 'TOGGLE_FORM';
export const TOGGLE_ADD_FORM = 'TOGGLE_ADD_FORM';


export function fetchSmurfs() {
  return (dispatch) => {
    dispatch({type: FETCHING_SMURFS})
    axios.get('http://localhost:3333/smurfs')
    .then(({data}) => {
      console.log(data);
      dispatch({type: SMURFS_FETCHED, payload: data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FETCH_ERROR, error: err})
    })
  }
}

export function addSmurf(smurf) {
  return (dispatch) => {
    dispatch({type: ADDING_SMURF})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(({data}) => {
      console.log(data);
      dispatch({type: SMURF_ADDED, payload: data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: ADD_ERROR, error: err})
    })
  }
}

export function updateSmurf(id, smurf) {
  return (dispatch) => {
    dispatch({type: UPDATING_SMURF})
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(({data}) => {
      console.log(data);
      dispatch({type: SMURF_UPDATED, payload: data})
    })
    .catch(err => {
      dispatch({type: UPDATE_ERROR, error: err})
    }
    )
  }
}

export function deleteSmurf(id) {
  return (dispatch) => {
    dispatch({type: DELETING_SMURF})
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(({data}) => {
      dispatch({type: SMURF_DELETED, payload: data})
    })
    .catch(err => {
      dispatch({type: DELETE_ERROR, error: err})
    })
  }
}

export const toggleForm = () => {
  return {
    type: TOGGLE_FORM
  }
}

export const toggleAddForm = () => {
  return {
    type: TOGGLE_ADD_FORM
  }
}