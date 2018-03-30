import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const PUT_SMURFS = 'PUT_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const ERROR = 'ERROR';

export const getSmurf = () => dispatch => {
  axios.get(`http://localhost:3333/smurfs`).then(
    response => { dispatch({ type: GET_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const postSmurf = (smurf) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, smurf).then(
    response => { dispatch({ type: POST_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const putSmurf = (id, smurf) => dispatch => {
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf).then(
    response => { dispatch({ type: PUT_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const deleteSmurf = (id) => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${id}`).then(
    response => { dispatch({ type: DELETE_SMURFS, id: response.data.SmurfRemoved.id })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}
