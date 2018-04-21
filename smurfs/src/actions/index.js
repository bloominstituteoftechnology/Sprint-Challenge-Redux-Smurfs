/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING';
export const FETCHED_SMURFS = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
   axios
     .get(URL)
     .then(response => 
        dispatch({ type: FETCHED_SMURFS, smurfs: response.data }))
     .catch(err =>
        dispatch({ type: ERROR, errorMessage: 'Could not retrieve data' }
      ));
 };

export const addSmurf = smurf => dispatch => {
  axios
    .post(URL, {smurf})
    .then(response => { 
      dispatch({ type: ADD_SMURF });
  }).catch(err => { 
      dispatch({ type: ERROR, errorMessage: 'Not able to add Smurf'})});
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
