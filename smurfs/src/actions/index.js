import axios from 'axios'

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const ADD_SMURF = 'ADD_SMURF';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAIL = 'DELETE_SMURF_FAIL';

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAIL = 'UPDATE_SMURF_FAIL';



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

export const deleteSmurf = id => dispatch => {
  dispatch({type: DELETE_SMURF_START})
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res=> {
      dispatch({type:DELETE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=> dispatch({type:DELETE_SMURF_FAIL, payload:err}))

}

export const updateSmurf = smurf => dispatch => {
  console.log(smurf, 234252352109)
  dispatch({type: UPDATE_SMURF_START})
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res=> {
      dispatch({type:UPDATE_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err=> dispatch({type:UPDATE_SMURF_FAIL, payload:err}))

}