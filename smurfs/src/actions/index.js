import axios from 'axios';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const GET_SMURFS = 'GET_SMURFS';
export const ERROR = 'ERROR';
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

export const addSmurf = (addedSmurf) => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    axios
      .post(`http://localhost:3333/smurfs`, addedSmurf)
      .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: `Oh no! We couldn't add the Smurf!` })
      });
  }
}

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Oh no! We had some trouble loading the Smurfs!' })
      });
  }
}