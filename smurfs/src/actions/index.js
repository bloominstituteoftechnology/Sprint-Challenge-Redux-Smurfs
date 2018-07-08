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

import axios from 'axios';

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


// Smurfs GET Request
export const fetchSmurfs = () => {
  const promise = axios.get('http://localhost:3333/smurfs')

  return dispatch => {
    dispatch({ type: PENDING });
    promise
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data })
      })
      .catch(err => console.log(err));
  }
}

// Smurfs POST Request
export const addSmurf = (smurf) => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf)

  return dispatch => {
    dispatch({ type: PENDING });
    promise
      .then(res => {
        dispatch({ type: SUCCESS, payload: res.data})
      })
      .catch(err => console.log(err));
  }
}