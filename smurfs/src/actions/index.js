import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
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

const URL = `http://localhost:3333/smurfs`;

export const fetchingData = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios
    .get(URL)
    .then(({data}) => {
      dispatch({type: SMURFS_FETCHED, payload: data});
    })
    .catch(error => {
      dispatch({type:ERROR, payload: 'Oh no! A Smurfing error!'});
  });
  }
}

export const addSmurf = smurf => {
  return (dispatch) => {
    dispatch({type: ADDING_SMURF})
    axios
    .post(URL, smurf)
    .then( ({data}) => {
      dispatch({type: SMURF_ADDED, payload: data})
    })
    .catch(error => {
      dispatch({type:ERROR, payload: 'You cannot add that Smurf!'});
  });
  }
}