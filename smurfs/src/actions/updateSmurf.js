import axios from 'axios';

export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const updateSmurf = (updatedInfo, smurfID) => {
  return dispatch => {
    axios.put(`http://localhost:3333/smurfs/${smurfID}`, updatedInfo)
      .then(response => {
        dispatch({ type: UPDATE_SMURF, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: UPDATE_ERROR })
      })
  }
}