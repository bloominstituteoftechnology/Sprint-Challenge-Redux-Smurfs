import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
const url = 'http://localhost:3333/smurfs'

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios
    .get(url)
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const addSmurf = (newSmurf) => dispatch => {
  axios
    .post(url, newSmurf)
    .then(res => {
      dispatch({ type: ADDED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const updating = (id) => dispatch => {
  dispatch({ type: UPDATING, payload: id })
}

export const updateSmurf = (editedSmurf) => dispatch => {
  axios
    .put(`${url}/${editedSmurf.id}`, editedSmurf)
    .then(res => {
      dispatch({ type: UPDATED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const deleteSmurf = (id) => dispatch => {
  axios
    .delete(`${url}/${id}`)
    .then(res => {
      dispatch({ type: DELETED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}