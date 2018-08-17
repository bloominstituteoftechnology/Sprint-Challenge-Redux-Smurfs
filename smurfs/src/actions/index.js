import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
// export const ADD_SMURF = 'ADD_SMURF';
// export const ADDED_SMURF = 'ADDED_SMURF';
export const ERRORS = 'ERRORS';
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
const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
    return dispatch => {
      dispatch({type: GET_SMURFS});
      axios
        .get(url)
        .then( response => {
          dispatch({type: GOT_SMURFS, payload: response.data})
        })
    }
}