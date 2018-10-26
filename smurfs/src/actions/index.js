import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCC = "FETCHING_SMURFS_SUCC";
export const FETCHING_SMURFS_FAIL = "FETCHING_SMURFS_FAIL";

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF_SUCC = 'ADDED_SMURF_SUCC';
export const ADDED_SMURF_FAIL = 'ADDED_SMURF_FAIL';


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
export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('res', response)
      dispatch({type: FETCHING_SMURFS_SUCC, payload: response.data});
    })
    .catch(error => {
      dispatch({ type:FETCHING_SMURFS_FAIL, payload: error})
    })
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({ type: ADDED_SMURF_SUCC, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADDED_SMURF_FAIL, payload: error });
      });
  };
};