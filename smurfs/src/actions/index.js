import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF = 'ADD_SMURF';




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

let url = 'http://localhost:3333'

export const getSmurfs = dispatch () => {

dispatch({type: FETCH_SMURFS})
axios
.get(url)
.then(res=> {
  console.log(res);
  dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
})
.catch(err=> {
  dispatch({type: FETCH_SMURFS_FAIL, payload: err})
})

}

export const addSmurf = smurf => dispatch => {
  
  dispatch({ type: ADD_SMURF})
  axios
    .post(`${url}/smurfs`, smurf)
    .then(res=> {
      console.log(res);
      dispatch({type:ADD_SMURF, payload: res.data})
    })
    .catch(err=> console.log(err))

}
