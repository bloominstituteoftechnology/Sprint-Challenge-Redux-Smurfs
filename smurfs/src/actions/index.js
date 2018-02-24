import axios from 'axios';

export const ERROR = 'ERROR';
export const CREATE_SMURF = 'CREATE_SMURF';
export const CREATING_SMURF = 'CREATING_SMURF';
export const GET_SMURFS = 'GET_SMURF';
export const GETTING_SMURFS = 'GETTING_SMURF';
// export const UPDATE_SMURF = 'UPDATE_SMURF';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const DELETE_SMURF = 'DELETE_SMURF';
// export const DELETING_SMURF = 'DELETING_SMURF';

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
const URL = 'http://localhost.3333';

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/smurfs`, smurf);
  return (dispatch) => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: CREATE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/smurfs`);
  return (dispatch) => {
    dispatch({ type: GETTING_SMURFS });
    smurfs
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};