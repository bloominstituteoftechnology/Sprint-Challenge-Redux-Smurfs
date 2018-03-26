import axios from 'axios';


export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const GET_SMURFS = 'GET_SMURFS';

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
    axios.get('ttp://localhost:5000/api/friends')
      .then(response => {
        console.log('Fetched smurfs');
      }).catch(error => {
        console.log('Error: ', error);
      });
  };

export const addSmurf = () =>
  dispatch => {
    axios.post('ttp://localhost:5000/api/friends')
      .then(response => {
        dispatch({ type: ADD_SMURF, smurf });
      }).catch(error => {
        console.log(error);
      });
  };
