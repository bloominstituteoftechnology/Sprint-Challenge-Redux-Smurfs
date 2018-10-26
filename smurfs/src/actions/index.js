/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

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
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type: GET_SMURFS});
  axios
  .get('http://localhost:3333/smurfs')
  .then(response => {
      dispatch({type: GET_SMURFS_SUCCESS, payload: response.data})
  }) 
  .catch(error => {
      dispatch({type: GET_SMURFS_FAILURE, payload: error})
  })
}

export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({type: ADD_SMURFS});
  axios
  .post('http://localhost:3333/smurfs', 
    {
      name: name,
      age: age,
      height: height
    }
  )
  .then(response => {
      dispatch({type: ADD_SMURFS_SUCCESS, payload: response.data})
  }) 
  .catch(error => {
      dispatch({type: ADD_SMURFS_FAILURE, payload: error})
  })
}


