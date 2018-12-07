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

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_SMURF_START = 'ADDING_SMURF_START';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const DELETE_SMURF_START = 'DELTE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

const URL = 'http://localhost:3333/smurfs';

export const addingSmurfs = newSmurf => dispatch => {
  dispatch({ type: ADDING_SMURF_START });
  axios
    .post(URL, newSmurf)
    .then(res => {
      // console.log(res);
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: ADDING_SMURF_FAILURE, payload: err});
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`${URL}/${id}`)
    .then(res => {
      // console.log(res);
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err});
    });
};

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get(URL)
    .then(res => {
      // console.log(res);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({ type: FETCHING_FAILURE, payload: err});
    });
};