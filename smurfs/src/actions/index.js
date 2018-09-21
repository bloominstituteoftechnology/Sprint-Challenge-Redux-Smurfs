/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';
export const FETCH_ERROR = 'FETCH_ERROR';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_COMPLETE = 'ADD_SMURF_COMPLETE';
export const ADD_SMURF_ERROR = 'ADD_SMURF_ERROR';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_DATA });
    const promise = axios.get('http://localhost:3333/smurfs');

    promise
      .then((response) => {
        dispatch({ type: FETCHED_DATA, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF_START });
    const promise = axios.post('http://localhost:3333/smurfs', newSmurf);
    promise
      .then((response) => {
        dispatch({ type: ADD_SMURF_COMPLETE, payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: ADD_SMURF_ERROR });
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
