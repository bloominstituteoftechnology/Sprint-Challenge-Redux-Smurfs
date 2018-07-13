/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

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

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING });
    promise.then(( { data }) => {
      console.log("Hey, this is after FETCHING: ", this.state)
      dispatch({ type: FETCHED, payload: data });
    })
    .catch( () => dispatch({
      type: ERROR,
      payload: "Couldn't load smurfs. Check your URL or see if it's running."
    }))
  }
}

export const addSmurfs = () => {
  const promise = axios.post('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    promise.then(({ data }) => {
      console.log("Trying to add a smurf: ", this.state);
      dispatch({ type: UPDATE_SMURF, payload: data });
    })
    .catch( () => dispatch({
      type: ERROR,
      payload: "Couldn't add & update smurf"
    }))
  }
}