/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR = 'ERROR';
// export const ADDING_SMURF = 'ADDING_SMURF';
// export const ADDED_SMURF = 'ADDED_SMURF';

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

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return function (dispatch) {
    dispatch({ type: FETCHING_SMURFS, payload: true });
    getSmurfs
      .then(data => {
        console.log(data);
        dispatch({ type: FETCHED_SMURFS, payload: data.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: true });
      })
  }
}

