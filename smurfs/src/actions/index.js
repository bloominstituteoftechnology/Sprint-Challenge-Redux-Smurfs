/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

//export const LOADING = 'LOADING';
export const GET_SMURF = 'GET_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const DEL_SMURF = 'DEL_SMURF';

export const showSmurfAction = () => dispatch => {
  axios.
  get('http://localhost:3333/smurfs')
  .then(response = {
    dispatch({ type: GET_SMURF, smurts: response.data })
  })
  .catch(error => {
    console.log(error);
  });
}

export const addSmurfAction = () => dispatch => {
  
}




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
