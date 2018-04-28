import axios from 'axios'
import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
} from './types'

const ROOT_URL = 'http://localhost:3333'
const fetchSuccess = data => ({ type: SUCCESS, payload: data })

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios.get(`${ROOT_URL}/smurfs`)
    .then(({ data }) => dispatch(fetchSuccess(data)))
    .catch(error => dispatch({ type: ERROR, error }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING })
  axios.post(`${ROOT_URL}/smurfs`, smurf)
    .then(({ data }) => dispatch({ type: SUCCESS, payload: data }))
    .catch(error => dispatch({ type: ERROR, error }))
}

export const editSmurf = smurf => dispatch => {
  const { id } = smurf
  dispatch({ type: UPDATING })
  axios.put(`${ROOT_URL}/smurfs/${id}`, smurf)
    .then(_ => dispatch(getSmurfs()))
    .catch(error => dispatch({ type: ERROR, error }))
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING })
  axios.delete(`${ROOT_URL}/smurfs/${id}`)
    .then(_ => dispatch(getSmurfs()))
    .catch(error => dispatch({ type: ERROR, error }))
}

