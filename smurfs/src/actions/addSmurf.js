import axios from 'axios';

export const FETCH_NEW_SMURF = "FETCH_NEW_SMURF";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const addSmurf = data => {
  const promise = axios.post("http://localhost:3333/smurfs", data)
  return dispatch => {
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: FETCH_NEW_SMURF, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADD_SMURF_ERROR });
      })
  }
}