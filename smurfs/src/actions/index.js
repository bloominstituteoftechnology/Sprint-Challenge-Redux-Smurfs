import axios from 'axios';

const URL = 'http://localhost:3333/smurfs';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const FIND_SMURF = 'FIND_SMURF';
export const DESELECT_SMURF = 'DESELECT_SMURF';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });

    axios.get(URL)
          .then(res => dispatch({ type: FETCHED_SMURFS, payload: res.data }))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
};

export const addSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: ADDING_SMURF });

    axios.post(URL, smurf)
          .then(res => dispatch ({ type: SMURF_ADDED, payload: res.data }))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
};

export const viewSmurf = id => {
  return {
    type: FIND_SMURF,
    id
  }
}

export const deselectSmurf = () => {
  return {
    type: DESELECT_SMURF
  }
}

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
