import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

export const FETCHING = 'FETCHING';
export const CREATING = 'CREATING';
export const ERROR = 'ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHING, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching smurfs' });
    });
};

export const addSmurf = addSmurf => dispatch => {
  dispatch({ type: CREATING });

  axios
    .post('http://localhost:3333/smurfs', addSmurf)
    .then(response => {
      dispatch({ type: CREATING, smurfs: response.data });
    })
    .catch(error => {
      console.log(`There was an error adding a new smurf: ${error}`);
    });
};
