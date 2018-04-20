import axios from 'axios';

export const FETCH_NEW_SMURF = "FETCH_NEW_SMURF";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const addSmurf = smurf => {
  return dispatch => {
    axios.post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }
}