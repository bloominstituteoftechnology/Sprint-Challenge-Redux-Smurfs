import axios from 'axios';
export const LOADING = 'LOADING';
export const GET_SMURFS = 'GET_SMURF';
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( res => {
        dispatch({type: GET_SMURFS, smurfs: res.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: err})
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.post('http://localhost:3333/smurfs', smurf)
      .then( res => {
        dispatch({type: GET_SMURFS, smurfs: res.data})
      })
      .catch(err => {
        dispatch({type: ERROR_MESSAGE, errorMessage: err})
      })
  }
}
