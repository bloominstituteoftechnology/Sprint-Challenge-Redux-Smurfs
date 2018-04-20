import axios from 'axios';
export const GET_SMURF = 'GET_SMURF';
export const POST_SMURF = 'POST_SMURF';
export const PUT_SMURF = 'PUT_SMURF';
export const  DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';

export const getSmurf = () => dispatch => {
  axios.get(`http://localhost:3333/smurfs`)
  .then( response => { dispatch({ type: GET_SMURF, smurfs: response.data})}
  ).catch(
    error => { dispatch( { type: ERROR, errorMessage: error.response.data.Error})}
  )
}
export const postSmurf = (smurf) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, smurf).then(
      response => { dispatch({ type: POST_SMURF, smurfs: response.data })}
    ).catch(
      error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
    )
  }
  
  export const putSmurf = (id, smurf) => dispatch => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf).then(
      response => { dispatch({ type: PUT_SMURF, smurfs: response.data })}
    ).catch(
      error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
    )
  }
  
  export const deleteSmurf = (id) => dispatch => {
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(
      response => { dispatch({ type: DELETE_SMURF, id: response.data.SmurfRemoved.id })}
    ).catch(
      error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
    )
  } 
  
