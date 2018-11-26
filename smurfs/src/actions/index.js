import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";
export const ERROR = "ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: FETCHED, smurfs: res.data })
    })
    .catch(err => {
      dispatch({ type: "ERROR", errorMessage: 'ERROR!'})
    })
}

export const addSmurf = ( newSmurf) => dispatch => {
  dispatch ({type: ADDING});
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      dispatch({type: ADDED, smurfs:res.data})
      .catch(err => { 
        dispatch({type: ERROR, errorMessage: 'ERROR!'})
      })
    })
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
