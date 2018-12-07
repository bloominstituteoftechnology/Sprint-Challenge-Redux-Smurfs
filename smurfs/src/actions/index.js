
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCH_SUMRF_START = "FETCH_SUMRF_START";
export const FETCH_SUMRF_SUCCESS = "FETCH_SUMRF_SUCCESS";
export const FETCH_SUMRF_FAILURE = "FETCH_SUMRF_FAILURE";

export const ADD_SUMRF_START = "ADD_SUMRF_START";
export const ADD_SUMRF_SUCCESS = "ADD_SUMRF_SUCCESS";
export const ADD_SUMRF_FAILURE = "ADD_SUMRF_FAILURE";

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
  dispatch({ type: FETCH_SUMRF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('fetch finished');
      dispatch({ type: FETCH_SUMRF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_SUMRF_FAILURE, payload: err }));
};


export const addSmurf = item => dispatch => {
  dispatch({ type: ADD_SUMRF_START });
  axios
    .post('http://localhost:3333/smurfs', item)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADD_SUMRF_SUCCESS,
        payload: response.data
      });
    })
    .catch(err => dispatch({ type: ADD_SUMRF_FAILURE, payload: err }));
};