import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const PUT_SMURFS = 'PUT_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const ERROR = 'ERROR';

export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURFS });

  axios.get(`http://localhost:3333/smurfs`).then(
    response => { dispatch({ type: GET_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error})}
  )
}

export const postSmurf = (smurf) => dispatch => {
  dispatch({ type: POST_SMURFS, smurfs: []});

  axios.post(`http://localhost:3333/smurfs`, smurf).then(
    response => { dispatch({ type: POST_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error})}
  )
}

export const putSmurf = (id, smurf) => dispatch => {
  dispatch({ type: PUT_SMURFS });

  axios.put(`http://localhost:3333/${id}`, smurf).then(
    response => { dispatch({ type: PUT_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error})}
  )
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURFS });

  axios.delete(`http://localhost:3333/${id}`).then(
    response => { console.log(response); 
      dispatch({ type: DELETE_SMURFS, smurfs: response.data })}
  ).catch(
    error => { dispatch( {type: ERROR, errorMessage: error})}
  )
}