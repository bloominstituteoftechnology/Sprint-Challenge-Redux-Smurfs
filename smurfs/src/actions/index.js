import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const PUT_SMURFS = 'PUT_SMURFS';
export const DELETE_SMURFS = 'DELETE_SMURFS';
export const ERROR = 'ERROR';

export const getSmurf = () => dispatch => {
  axios.get(`http://localhost:3333/smurfs`)
  .then(
    response => { dispatch({ type: GET_SMURFS, smurfs: response.data })}
  )
  .catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const postSmurf = (smurf) => dispatch => {
  axios.post(`http://localhost:3333/smurfs`, smurf)
  .then(
    response => { dispatch({ type: POST_SMURFS, smurfs: response.data })}
  )
  .catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const putSmurf = (id, smurf) => dispatch => {
  axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
  .then(
    response => { dispatch({ type: PUT_SMURFS, smurfs: response.data })}
  )
  .catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}

export const deleteSmurf = (id) => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${id}`)
  .then(
    response => { dispatch({ type: DELETE_SMURFS, id: response.data.SmurfRemoved.id })}
  )
  .catch(
    error => { dispatch( {type: ERROR, errorMessage: error.response.data.Error})}
  )
}
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
