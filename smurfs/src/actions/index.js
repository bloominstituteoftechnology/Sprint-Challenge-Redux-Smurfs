
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response);
        dispatch({type: FETCH_SMURFS, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });   
  };
};

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({type: ADDING_SMURF});
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({type: ADD_SMURF, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err});
      });
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
