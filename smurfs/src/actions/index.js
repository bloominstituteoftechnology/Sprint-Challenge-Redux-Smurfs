/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  axios
    .get(URL);
    return (dispatch) => {
    dispatch({ type: GETTING_SMURFS})
  }
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
