/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const SUCCESS_FETCH = 'SUCESS_FETCH';
export const FAILURE = 'FAILURE';

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
const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  console.log(dispatch);
  dispatch({ type: FETCH_SMURFS })
    axios
      .get(`${URL}`)
      .then(response => {
        console.log(response);
        dispatch({
          type: SUCCESS_FETCH,
          payload: response.data })
        })
        .catch(error => {
          console.log(error);
          dispatch({
            type: FAILURE,
            payload: error
          })
      })
}