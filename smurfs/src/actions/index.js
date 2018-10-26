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

import axios from 'axios'

export const ADDING = 'ADDING'
export const ADDSMURF = 'ADDSMURF'
export const GETTING = 'GETTING'
export const GETSMURFS = 'GETSMURFS'
export const UPDATING = 'UPDATING'
export const UPDATESMURF = 'UPDATESMURF'
export const DELETING = 'DELETING'
export const DELETESMURF = 'DELETESMURF'
export const ERROR = 'ERROR'

export const addSmurf = ({ name, age, height }) => dispatch => {
  dispatch({ type: ADDING })

  axios
    .post('http://localhost:3333/smurfs', { name, age, height })
    .then(res => dispatch({ type: ADDSMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING })

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: GETSMURFS, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const updateSmurf = ({ id, name, age, height }) => dispatch => {
  dispatch({ type: UPDATING })

  axios
    .put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
    .then(res => dispatch({ type: UPDATESMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }))
}

export const deleteSmurf = ({ id }) => dispatch => {
  dispatch({ type: DELETING })

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETESMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }))
}
