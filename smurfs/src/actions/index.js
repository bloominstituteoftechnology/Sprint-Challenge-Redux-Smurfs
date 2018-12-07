import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURF_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const EDITING_SMURF = 'EDITING_SMURF';
export const EDIT_SMURF_SUCCESS = 'EDII_SMURF_SUCCESS';
export const EDIT_SMURF_FAILURE = 'EDIT_SMURF_FAILURE';

export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const SMURF_SELECTED = 'SMURF_SELECTED';
export const CLEAR_SELECTED = 'CLEAR_SELECTED';

// not sure why this didn't work...try again later
//const ax = axios.create({
//baseUrl: 'http://localhost:3333/',
//});

//console.log('ax', ax.baseURL);
//
const url = 'http://localhost:3333';
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
export const getSmurfs = () => dispatch => {
  console.log('getting smurfs');
  dispatch({type: GETTING_SMURFS});
  axios
    .get(`${url}/smurfs/`)
    .then(res => {
      console.log('then', res);
      dispatch({type: GET_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: GET_SMURF_FAILURE, payload: err});
    });
};

export const addSmurf = smurf => dispatch => {
  console.log('adding smurf');
  dispatch({type: ADDING_SMURF});
  axios
    .post(`${url}/smurfs`, smurf)
    .then(res => {
      dispatch({type: ADD_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err.data);
      dispatch({type: ADD_SMURF_FAILURE, payload: err.data});
    });
};

export const selectSmurf = name => dispatch => {
  dispatch({type: SMURF_SELECTED, payload: name});
};

export const editSmurf = smurf => dispatch => {
  console.log('editing smurf');
  dispatch({type: EDITING_SMURF, payload: smurf});
  axios
    .put(`${url}/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({type: EDIT_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: EDIT_SMURF_FAILURE, payload: err.data});
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETING_SMURF});
  axios
    .delete(`${url}/smurfs/${id}`)
    .then(res => {
      dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: DELETE_SMURF_FAILURE, payload: err.data});
    });
};

export const clearSelected = () => dispatch => {
  dispatch({type: CLEAR_SELECTED});
};
