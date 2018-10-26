import axios from 'axios';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR = 'ERROR';

// export const UPDATE_SMURF = 'UPDATE_SMURFS';
// export const DELETE_SMURF = 'DELETE_SMURF';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const DELETING_SMURF = 'DELETING_SMURF';
// export const SINGLE_SMURF = 'SINGLE_SMURF';
// export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';


export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: GETTING_SMURFS});
    axios
      .get('http://localhost:3333/smurfs')
      // .then(response => console.log('this is response from actions', response))
      .then(response => {
        dispatch({type: GET_SMURFS, payload: response.data})})
      .catch(error => {
        dispatch({type: ERROR, payload: error})})
  }

}


export const newSmurf = (smurfInfo) => {
  console.log('this is smurf info', smurfInfo)
  return dispatch => {
    dispatch({type: CREATING_SMURF});
    axios
      .post('http://localhost:3333/smurfs', smurfInfo)
       .then(response => {
         dispatch({type: ADDED_SMURF, payload: response.data})})
      .catch(error => {
        dispatch({type: ERROR, payload: error})})
  }

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
