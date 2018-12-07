import axios from 'axios';
import { urlLinks } from '../../components/App';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_LOADING = 'ADD_SMURF_LOADING';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const REMOVE_SMURF_LOADING = 'REMOVE_SMURF_LOADING';
export const REMOVE_SMURF_SUCCESS = 'REMOVE_SMURF_SUCCESS';
export const REMOVE_SMURF_FAILURE = 'REMOVE_SMURF_FAILURE';

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
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_LOADING });
  axios
    .get(`${urlLinks.server}${urlLinks.home}${urlLinks.smurfs}`)
    .then(res => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_SMURFS_FAILURE, payload: err }));
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF_LOADING });
  axios
    .post(`${urlLinks.server}${urlLinks.home}${urlLinks.smurfs}`, newSmurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const removeSmurf = id => dispatch => {
  dispatch({ type: REMOVE_SMURF_LOADING });
  axios
    .delete(`${urlLinks.server}${urlLinks.home}${urlLinks.smurfs}/${id}`)
    .then(res => {
      dispatch({ type: REMOVE_SMURF_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: REMOVE_SMURF_FAILURE, payload: err }));
};
