/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

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
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

export const getSmurf = () => {
  const callSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING });
    callSmurfs
      .then(res => {
        dispatch({
          type: FETCHED,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const addSmurf = newSmurf => {
  const addNewSmurf = axios.post('http://localhost:3333/smurfs', newSmurf);
  return dispatch => {
    dispatch({ type: ADDING });
    addNewSmurf
      .then(res => {
        dispatch({
          type: ADDED,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const deleteSmurf = smurfId => {
  const removeSmurf = axios.delete(`http://localhost:3333/smurfs/${smurfId}`);
  return dispatch => {
    dispatch({ type: DELETING });
    removeSmurf
      .then(res => {
        dispatch({
          type: DELETED,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};