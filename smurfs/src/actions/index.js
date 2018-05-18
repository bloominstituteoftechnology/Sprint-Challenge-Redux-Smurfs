import axios from 'axios';
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDED_SMURF = "ADDED_SMURF";
export const ERROR = "ERROR";
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
  return function(dispatch){
    dispatch({
      type: FETCHING_SMURFS,
    });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({
          type: FETCHED_SMURFS,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'Request failed'
        });
      })
  };
};

export const addSmurf = smurf => {
  return function(dispatch){
    dispatch({
      type: ADDING_SMURF,
    });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({
          type: ADDED_SMURF,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: 'Failed to add Smurf'
        });
      })
  };
};
