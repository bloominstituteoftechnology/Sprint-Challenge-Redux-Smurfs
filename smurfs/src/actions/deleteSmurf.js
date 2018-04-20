import axios from 'axios';

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_ERROR = "DELETE_ERROR";
export const FETCH_SMURFS = "FETCH_SMURFS";

export const deleteSmurf = id => {
  return dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        dispatch({ type: DELETE_ERROR })
      })
  }
}