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

export const getSmurfs = () => dispatch => {
dispatch({type: FETCH_SMURFS})
axios
.get('http://localhost:3333/smurfs')
.then(res=> {
  console.log(res);
  dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
})
.catch(err=> {
  console.log('This is bad')
  dispatch({type: FETCH_SMURFS_FAIL, payload: err})
})

}

export const addSmurf = smurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res=> {
      dispatch({type:ADD_SMURF, payload: res.data})
    })
    .catch(err=> console.log(err))

}
