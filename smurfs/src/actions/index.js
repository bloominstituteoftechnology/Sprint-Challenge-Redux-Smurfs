/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS_FETCHING = 'SUCCESS_FETCHING';
export const ERROR = 'ERROR';



export const ADDING = 'ADDING';
export const SUCCESS_ADDING = 'SUCCESS_ADDING';
export const ERROR_ADDING = 'ERROR_ADDING';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });

    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res);
        dispatch({ type: SUCCESS_FETCHING, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING });

    axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(res => {
        console.log(res.data, 'RES.DATA');
        dispatch({ type: SUCCESS_ADDING, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR_ADDING, payload: err.message})
      })
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
