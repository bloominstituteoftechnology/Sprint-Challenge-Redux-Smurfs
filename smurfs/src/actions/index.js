import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';
export const DELETING_SMURF_SUCCESS = 'DELETING_SMURF_SUCCESS';
export const DELETING_SMURF_FAILURE = 'DELETING_SMURF_FAILURE';

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

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(url)
    .then(response => {
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error });
    });
};

export const addSmurf = smurf => dispatch => {
  axios
    .post(url, smurf)
    .then(response => {
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ADDING_SMURF_FAILURE, payload: error });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`${url}/${id}`)
    .then(res => {
      dispatch({ type: DELETING_SMURF_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETING_SMURF_FAILURE });
    });
};
