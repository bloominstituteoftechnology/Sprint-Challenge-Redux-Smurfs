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

import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';

export const fetchSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs');

  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    // after the data is fetched
    // set time out to simulates a longer delay on api request
    setTimeout(()=>{
       request
      .then((res) => {
        // dispatch action
        dispatch({ type: FETCHED_SMURFS, payload: res.data });
      })
      .catch((err) => {
        console.log('ERROR!', err);
      });
    }, 2000); 
  };
};

export const addSmurf = (smurf) => {

  const request = axios.post('http://localhost:3333/smurfs', smurf);

  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    // after the data is fetched
     request
    .then((res) => {
      // dispatch action
      dispatch({ type: FETCHED_SMURFS, payload: res.data });
    })
    .catch((err) => {
      console.log('ERROR!', err);
    });
  };
};
