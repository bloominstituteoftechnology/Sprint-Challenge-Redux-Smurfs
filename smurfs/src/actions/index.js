import axios from 'axios';


export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const UPDATED_SMURF = 'UPDATED_SMURF';
export const SMURFING_ERROR = 'SMURFING_ERROR';

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

export const getSmurfs = () =>
  dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios.get('ttp://localhost:3333/smurfs')
      .then(smurfs => {
        console.log('Fetched smurfs');
        dispatch({ type: FETCHED_SMURF, smurfs: smurfs.data });
      }).catch(error => {
        dispatch({ type: SMURFING_ERROR, errorMessage: 'Error fetching smurfs' });
      });
  };

export const addSmurf = () =>
  dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios.post('ttp://localhost:3333/smurfs')
      .then(smurf => {
        dispatch({ type: ADDED_SMURF, smurf: smurf.data });
      }).catch(error => {
        dispatch({ type: SMURFING_ERROR, errorMessage: 'Error adding smurf' });
      });
  };
