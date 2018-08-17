import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const RETRIEVING_SMURFS = 'RETRIEVING_SMURFS';
export const RETRIEVED_SMURFS = 'RETRIEVED_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const UPDATED_SMURFS = 'UPDATED_SMURFS';
export const DELETING_SMURFS = 'DELETING_SMURFS';
export const DELETED_SMURFS = 'DELETED_SMURFS';
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

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: RETRIEVING_SMURFS });
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: RETRIEVED_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err});
      })
  }
}