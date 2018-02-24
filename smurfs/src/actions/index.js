import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR_ADDING = 'ERROR_ADDING';


export const getSmurfs = () => {
  const smurfGet = axios.get('http://localhost:3333/smurfs/');
  return dispatch => {
    dispatch({ type: FETCHING });
    smurfGet
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: err });
      });
  };
};

export const addSmurf = (smurf) => {
  const smurfPost = axios.post('http://localhost:3333/smurfs/', smurf);
  return dispatch => {
    dispatch({ type: ADDING });
    smurfPost
    .then((response) => {
      dispatch({ type: ADDED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR_ADDING, payload: err });
    })
  }
}

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
