import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURFS = 'GET_SMURFS';
export const PENDING = 'PENDING';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: PENDING});
    axios
      .get('http://localhost:3333/smurfs')
      .then( response => {
        console.log('RESPONSE', response)
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'SMURFING ERROR'})
      })
  }
}

export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: PENDING });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then( response => {
        dispatch(getSmurfs());
      })
      .catch( () => {
        dispatch({ type: ERROR, error: 'SMURFING ERROR'})
      })
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
