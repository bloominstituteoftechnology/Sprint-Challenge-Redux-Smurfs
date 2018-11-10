import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const getSmurf = smurfs => {
  return dispatch => {
    dispatch({ type: LOADING });
      axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
          console.log(response.data)
          dispatch({
            type: GET_SMURF,
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'Error getting smurfs'})
        })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get('http://localhost:3333/smurfs', {...smurf})
      .then()
      .catch(err => {
        dipatch({ type: ERROR, payload: 'error adding smurf'})
      })
  }
}







  //  C - addSmurf
  //  R - getSmurfs
  //  U - updateSmurf
  //  D - deleteSmurf

