import axios from 'axios';

export const FETCHED_SMURFS = 'FETCHED_SMURFS'
export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const ADDING_SMURF = 'ADDING_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'
export const ERROR = 'ERROR'

export const getSmurfs = () => {
  return (dispatch) => {
    const request = axios.get('http://localhost:3333/smurfs')
    dispatch({ type: FETCHING_SMURFS})
    request
    .then(({data}) => dispatch({ type: FETCHED_SMURFS, smurfs:data}))
    .catch(error => dispatch({ type: ERROR, error}))
  }
}

export const addSmurf = (smurf) => {
  return (dispatch) => {
    const request = axios.post('http://localhost:3333/smurfs', smurf)
    dispatch({ type: ADDING_SMURF})
    request
    .then(({data}) => dispatch({ type: FETCHED_SMURFS, smurfs:data}))
    .catch(error => dispatch({ type: ERROR, error}))
  }
}

export const deleteSmurf = (id) => {
  return (dispatch) => {
    const request = axios.delete(`http://localhost:3333/smurfs/${id}`)
    dispatch({ type: DELETING_SMURF})
    request
    .then(({data}) => dispatch({ type: FETCHED_SMURFS, smurfs:data}))
    .catch(error => dispatch({ type: ERROR, error}))
  }
}

export const updateSmurf = (smurf) => {
  return { type: UPDATING_SMURF, smurf}
}

export const saveSmurf = (id, smurf) => {
  return (dispatch) => {
    const request = axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    request
    .then(({data}) => dispatch({ type: FETCHED_SMURFS, smurfs:data}))
    .catch(error => dispatch({ type: ERROR, error}))
  }
}


