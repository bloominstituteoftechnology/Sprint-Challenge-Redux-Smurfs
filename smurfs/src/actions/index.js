import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const SMURFS_ADDED = 'SMURFS_ADDED';
export const EDITING_SMURFS = 'EDITING_SMURFS';
export const SMURFS_UPDATED = 'SMURFS_UPDATED';
export const ERROR = 'ERROR';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => {
  const getSmurfs = axios.get(`${URL}/smurfs`);
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
      .then(someData => {
        dispatch({ type: SMURFS_FETCHED, payload: someData.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurfs = smurf => {
  const newSmurf = axios.post(`${URL}/add`, smurf);
  return function(dispatch) {
    dispatch({ type: ADDING_SMURFS });
    newSmurf
      .then(someData => {
        dispatch({ type: SMURFS_ADDED, payload: someData.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  };
};

export const editSmurfs = smurf => {
  const changeSmurfs = axios.put(
    `http://localhost:3333/smurfs/${smurf.id}`,
    { newSmurf: smurf.name }
  );

  return function(dispatch) {
    dispatch({ type: EDITING_SMURFS });
    changeSmurfs
      .then(resolve => {
        dispatch({ type: SMURFS_UPDATED, payload: resolve.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
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
