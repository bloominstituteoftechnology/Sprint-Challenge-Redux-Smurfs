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
import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR = 'ERROR';
export const CREATING_SMURF = 'CREATING_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
      .then(response => {
        console.log(response);
        dispatch({ type: SMURFS_FETCHED, smurfs:data [] });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurf = smurf => {
  const createSmurf = axios.post(
    `http://localhost:3333/smurfs/${smurf.id}`,
    { newSmurf: smurf.name }
  );
  return function(dispatch) {
    dispatch({ type: CREATING_SMURF });
    createSmurf
      .then(response => {
        dispatch({ type: SMURF_CREATED, smurfs:data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

