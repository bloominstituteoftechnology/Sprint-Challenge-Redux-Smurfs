import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';

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
const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  const smurfs = axios.get(`${url}`);
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

export const createSmurf = (values) => {
  return (dispatch) => {
    dispatch ({ type: CREATING_SMURF });
    axios
      .post(`${url}`, values)
      .then(({ data }) => {
        dispatch({ type: CREATE_SMURF_SUCCESS, payload: data });
      })
      .catch(error => {
        dispatch({ type: CREATE_SMURF_FAILURE, payload: error });
      });
  }
}














