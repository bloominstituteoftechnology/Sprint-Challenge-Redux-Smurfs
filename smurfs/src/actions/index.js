import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/


export const ADDED_SMURF = 'ADDED_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';
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
export const getSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs/');
    return dispatch => {
      dispatch({ type: FETCHING_SMURFS });
      smurfs
        .then(payload => {
          dispatch({ type: FETCHED_SMURFS, payload: payload.data });
        })
        .catch(error => {
          dispatch({ type: ERROR, payload: error });
      });
  };
};
  
export const addSmurf = newSmurf => {
  const smurfs = axios.post('http://localhost:3333/smurfs/', newSmurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    smurfs
      .then(payload => {
        dispatch({ type: ADDED_SMURF, payload: payload.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
  
export const updateSmurf = (updatedSmurf, id) => {
  const smurfs = axios.put(`http://localhost:3333/smurfs/${id}`, updatedSmurf);

  return dispatch => {
    dispatch({ type: UPDATING_SMURF });
    smurfs
    .then(payload => {
      dispatch({ type: UPDATED_SMURF, payload: payload.data });
    })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
  
export const deleteSmurf = (deletingSmurf, id) => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`, deletingSmurf);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    smurfs
      .then((payload) => {
        dispatch({ type: DELETED_SMURF, payload: payload.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};