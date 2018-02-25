import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';

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
const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const friends = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    friends
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = data => {
  return dispatch => {
    dispatch({ type: CREATE_SMURF });
    axios
      .post(`${URL}/`, data)
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
