/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATED_SMURF = 'CREATED_SMURF';
export const ERROR_CREATING_SMURF = 'ERROR_CREATING_SMURF';

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
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED_SMURFS, smurfs: response.data });
    })
    .catch(error => {
      dispatch({
        type: ERROR_FETCHING_SMURFS,
        error: 'Error fetching smurfs'
      });
    });
};

export const postSmurf = data => dispatch => {
  dispatch({ type: CREATING_SMURF });

  axios
    .post('http://localhost:3333/smurfs', data)
    .then(response => {
      dispatch({ type: CREATED_SMURF, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR_CREATING_SMURF, error: 'Error creating smurf' });
    });
};
