// we'll need axios
import axios from 'axios';

/* Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer */

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_ERROR = 'SMURF_FETCH_ERROR';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_COMPLETE = 'ADD_SMURF_COMPLETE';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
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

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `http://localhost:3333/smurfs`
// remember that now we have controll over our thunk-based

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
  
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        // console.log(response);
        dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SMURF_FETCH_ERROR });
      })
  };
};
export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });

  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log(response);
        dispatch({ type: ADD_SMURF_COMPLETE, payload: response.data });
    }).catch(err => {
        dispatch({ type: ADD_SMURF_FAILURE, payload: err });
    })
};