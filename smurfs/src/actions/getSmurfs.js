import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

/*
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURFS_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: err });
      });
  };
};
