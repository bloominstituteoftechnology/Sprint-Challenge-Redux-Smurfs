import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const ERROR = 'ERROR';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios.get('http://localhost:3333/smurfs')
    .then( response => {
      dispatch({
        type: FETCHING_SMURFS,
        payload: response.data,
      });
    })

    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error,
      });
    });
};

export const addingSmurf = newSmurf => dispatch => {
  dispatch({ type: FETCHING });
  axios.get('http://localhost:3333/smurfs', newSmurf)
    .then( response => {
      dispatch({
        type: ADDING_SMURF,
        payload: response.data,
      });
    })

    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error,
      });
    });
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
