
import axios from 'axios'

export const GET_SMURFS = 'GET_SMURFS'
export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING'
export const ERROR = 'ERROR'

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: FETCHING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
      dispatch({type: ERROR, message: 'Failed to get smurfs'})  
      })
  }
}

export const createSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({type: CREATING})
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
      dispatch({type: ERROR, message: 'Failed to create new smurfs'})  
      })
  }
}