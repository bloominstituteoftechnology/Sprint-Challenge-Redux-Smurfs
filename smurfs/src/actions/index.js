import axios from 'axios'
export const LOADING = 'LOADING'
export const GET_SMURFS = 'GET_SMURFS'
export const ERROR = 'ERROR'

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type:ERROR, errorMessage: 'Trouble Finding Your Smurf Village'})
      })
  }
}

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Trouble Finding Your Smurf Village' })
      })
    }
}
