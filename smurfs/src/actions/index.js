import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

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

const BASE_URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => (dispatch) => {
  dispatch ({type: GET_REQUEST});

  axios
    .get(BASE_URL)
    .then( res => {
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: GET_FAILURE, payload: err })
    })
}