import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const DELETING_SMURF = 'DELETING_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
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

export const getSmurfs = () => {
    return dispatch => {
        dispatch({type: GET_SMURFS});
        axios.get('http://localhost:3333/smurfs')
             .then(res => dispatch({type: GOT_SMURFS, payload: res.data}))
             .catch(err => dispatch({type: ERROR, payload: err}))
    }
}

export const addSmurf = smurf => {
    return dispatch => {
        dispatch({type: ADDING_SMURF});
        axios.post('http://localhost:3333/smurfs', smurf)
             .then(res => dispatch({type: GOT_SMURFS, payload: res.data}))
             .catch(err => dispatch({type: ERROR, payload: err}))
    }
}

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({type: DELETING_SMURF});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(res => dispatch({type: GOT_SMURFS, payload: res.data}))
         .catch(err => dispatch({type: ERROR, payload: err}))
  }
}