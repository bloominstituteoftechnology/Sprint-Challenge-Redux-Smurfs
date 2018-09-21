/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const ADDING_SMURF = "ADDING_SMURF";
export const ERROR = "ERROR";

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
export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });

    axios
      .get('http://localhost:3333')
      .then(response => {
        dispatch({
          type: FETCH_SMURFS,
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        });
      })
  }
}

export const addSmurf = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333', smurf);

  return dispatch => {
    dispatch({ type: ADDING_SMURF });

    newSmurf
      .then(({data}) => {
        dispatch({
          type: ADD_SMURF,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        });
      })
  }
}