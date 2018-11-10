import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'

 export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCH_SMURFS})
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      dispatch({ type: FETCHED_SMURFS, payload: response.data})
    })
    .catch (error => dispatch({type: ERROR, payload: error}))
  }
}
 export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: ADD_SMURF})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({type: ADDED_SMURF, payload: response.data})
    })
    .catch (error => {
      dispatch({ type: ERROR, payload: error});
    })
  }
}
