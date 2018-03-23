import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCH_SMURF';
export const FETCHED_SMRUFS = 'FETCHED_SMURFS';
export const FETCH_ERROR = 'FETCH_ERROR';
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
  dispatch({ type: FETCH_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(({ data }) => {
      dispatch({ type: FETCHED_SMURFS, smurfs: data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR });
    });
};
