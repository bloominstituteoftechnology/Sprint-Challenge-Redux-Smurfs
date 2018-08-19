import axios from 'axios';
export const PENDING = 'PENDING';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchSmurfs = () => {
  const getSmurfs = axios.get(`http://localhost:3333/smurfs`);
  return function(dispatch) {
    dispatch({ type: FETCHING });
    getSmurfs
      .then( response => {
        console.log('GET repsonse', response)
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}

export const addSmurf = data => {
  const postSmurf = axios.post(`http://localhost:3333/smurfs`, data);
  return function(dispatch) {
    dispatch({ type: PENDING });
    postSmurf
      .then( response => {
        console.log('POST repsonse', response)
        dispatch({ type: SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  }
}

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