/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETING_SMURFS = 'DELETING_SMURFS';
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
  let smurfs = axios.get('http://localhost:3333/smurfs/');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
    .then(data => {
      dispatch({ type: FETCHED_SMURFS, payload: data })
    .catch(error => {
      dispatch({ type: ERROR, payload: error })
    });
  });
};

// export const addSmurfs = () => {

// };

// export const updateSmurf = () => {

// };

// export const deleteSmurf = () => {

// };

}
