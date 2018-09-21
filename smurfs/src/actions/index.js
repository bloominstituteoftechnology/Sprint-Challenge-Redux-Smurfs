/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';
export const FETCHING = 'FETCHING';

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .post('http://localhost:3333/smurfs', smurf)

      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
        // console.log(response.data);
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get('http://localhost:3333/smurfs')

      .then(response => {
        console.log(response.data);
        dispatch({ type: FETCHED, payload: response.data });
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};
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
