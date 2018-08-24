/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURF = 'FETCH_SMURF';
export const FETCHED = 'FETCHED';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDED = 'ADDED'
export const ERROR = 'ERROR';

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

export const fetchingSmurf = () => {
  return dispatch => {
    dispatch({
      type: FETCH_SMURF
    })
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        dispatch({
          type: FETCHED,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: 'error: no smurfs found'
        })
      })
  };
};

export const addSmurfs = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf)
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: 'error: no smurfs found'
        })
      })
  };
};
