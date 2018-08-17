import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR = 'ERROR';

const url = 'http://localhost:3333/smurfs';

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
  const promise = axios.get(url);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise.then((res) => {
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err});
    })
  };
}

export const addSmurf = (smurf) => {
  const promise = axios.post(url, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURFS });
    promise.then((res) => {
      console.log('res ', res);
      dispatch({ type: SMURF_ADDED, payload: res });
    })
    .catch((err) => {
      dispatch({ type: ERROR, payload: err });
    })
  };
}
