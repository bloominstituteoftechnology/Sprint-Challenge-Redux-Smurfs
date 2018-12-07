import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURF = 'GET_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
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

export const getSmurfs = () => dispatch => {
  dispatch({type: GET_SMURFS});

  axios
    .get('http://localhost:3333/smurfs')
    .then(resp => {
      dispatch({type: REQUEST_SUCCESS, payload: resp.data});
    })
    .catch(err => {
      dispatch({type: REQUEST_FAIL, payload: err});
    })
}

export const addSmurf = smurfInfo => dispatch => {
  axios
  .post('http://localhost:3333/smurfs', smurfInfo)
  .then(resp => {
    dispatch({type: REQUEST_SUCCESS, payload: resp.data});
  })
  .catch(err => {
    dispatch({type: REQUEST_FAIL, payload: err});
  })
}

// export const getSmurf = id => {
//   return {
//     type: GET_SMURF,
//     payload: id
//   }
// }

export const getSmurf = id => dispatch => {
  axios
  .get('http://localhost:3333/smurfs')
  .then(resp => {
    dispatch({type: REQUEST_SUCCESS, payload: resp.data});
  })
  .catch(err => {
    dispatch({type: REQUEST_FAIL, payload: err});
  }).then(() => {
    dispatch({type: GET_SMURF, payload: id})
  })
}