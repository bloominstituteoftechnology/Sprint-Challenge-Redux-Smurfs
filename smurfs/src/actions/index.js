import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_SMURFS = 'ERROR_SMURFS';
// export const UPDATE = 'UPDATE';
// export const DELETE = "DELETE";


export const fetchSmurfs = () => {
  const smurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS})
    smurfs
      .then(({ response }) => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log(`You've been smurf'd`, err);
        dispatch({ type: ERROR_SMURFS, payload: "Error Fetching Smurfs :("});
      });
  };
};

export const createSmurfs = smurf => {
  const smurfs = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    smurfs
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        console.log(`You've been smurf'd`, err);
        dispatch({ type: ERROR_SMURFS, payload: "Error Posting Smurfs :("});
      });
  };
};
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
