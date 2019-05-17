import axios from "axios";

export const LOADING = "LOADING";
export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.get('http://localhost:3333/smurfs')
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR_MESSAGE, errorMessage: error})
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.post('http://localhost:3333/smurfs', smurf)
      .then( response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR_MESSAGE, errorMessage: error})
      })
  }
}