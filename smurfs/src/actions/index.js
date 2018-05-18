import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const LOADING = 'LOADING';
export const FETCHED = 'FETCHED';
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

/* C - addSmurf */
export const addSmurf = (smurf) => {
  const request = axios.post('http://localhost:3333/smurfs/', smurf);
  return (dispatch) => {
    request
      .then(res => {
        console.log("ACTION--addSmurf-response",res);
        dispatch({
          type: FETCHED,
          payload: res.data,
        })
      })
      .catch(err => dispatch({
        type: ERROR,
        payload: err,
      }));
  }
}
/* R - getSmurfs */
export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs/');
  return (dispatch) => {
    dispatch({ type: LOADING });
    request
      .then(res => {
        console.log("ACTION--getSmurfs-response:",res);
        dispatch({
          type: FETCHED,
          payload: res.data,
        })
      })
      .catch(err => dispatch({
        type: ERROR,
        payload: err,
      }));
  }
}

