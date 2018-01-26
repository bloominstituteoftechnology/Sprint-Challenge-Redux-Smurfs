import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

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
const url = 'http://localhost:3333';

export const getSmurfs = () => {
  const smurfs = axios.get(`${url}/smurfs`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURFS_FETCHED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: error });
      });
  }
}
