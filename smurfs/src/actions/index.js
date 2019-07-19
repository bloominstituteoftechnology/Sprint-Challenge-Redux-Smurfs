/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ERROR = 'ERROR';

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data);
      dispatch({ 
        type: UPDATING_SMURF, 
        payload: res.data
      })
    })
    .catch(err => {
      console.log("error", err.response);
      dispatch({ type: ERROR, payload: err})
    })
}

export const addingSmurfs = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({ type: UPDATING_SMURF, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
}

export const deletingSmurf = smurfID => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios 
    .delete(`http://localhost:3333/smurfs/${smurfID}`)
    .then(res => {
      dispatch({ type: UPDATING_SMURF, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
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
