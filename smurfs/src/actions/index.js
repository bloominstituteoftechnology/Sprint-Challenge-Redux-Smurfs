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

export const ERROR = 'ERROR';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';

export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADD_SMURFS = 'ADD_SMURFS';

const URL = 'http://localhost:3333/smurfs';


export const getSmurfs = () => {
    const smurfs = axios.get(URL);
    return dispatch => {
      dispatch({ type: GETTING_SMURFS });
      smurfs
        .then(response => {
          dispatch({ type: GET_SMURFS, payload: response.data})
        })
        .catch(error => {
          dispatch({ type: ERROR, payload: error});
        }) 
    }
}


export const addSmurf = data => {
  const smurfs = axios.post(URL, data);
  return dispatch => {
    dispatch({ type: ADDING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: ADD_SMURFS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      })
  }
}
 
