import axios from 'axios'

export const FETCHING_SMURFS = "FETCHING_SMURFS"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"
export const ADDING_SMURF = "ADDING_SMURF"
export const DELETING_SMURF = "DELETING_SMURF"

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res)
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: ERROR, payload: err })
  })
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADDING_SMURF })
  axios.post('http://localhost:3333/smurfs', smurf) 
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF })
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({ type: SUCCESS, payload: res.data})
  })
  .catch(err => {
    dispatch({ type: ERROR, payload: err })
  })
}