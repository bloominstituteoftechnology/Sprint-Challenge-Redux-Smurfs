import axios from 'axios'

export const FETCHING = 'FETCHING'
export const FAILURE = 'FAILURE'
export const SUCCESS = 'SUCCESS'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getSmurfs = () => dispatch => {
 dispatch({type: FETCHING})
 axios
 .get('http://localhost:3333/smurfs')
 .then(response => {
  console.log(response)
  dispatch({type: SUCCESS, payload: response.data})
 })
 .catch(err => {
  console.log(err)
  dispatch({type: FAILURE, payload: 'No smurfs fetched.'})
 })
}

export const addSmurf = (data) => dispatch => {
 axios
 .post('http://localhost:3333/smurfs', data)
 .then(response => {
  dispatch({type: SUCCESS, payload: response.data})
 })
 .catch(() => {
  dispatch({type: FAILURE, payload: 'Smurf not added.' })
 })
}

export const deleteSmurf = (id) => dispatch => {
 axios
 .delete(`http://localhost:3333/smurfs/${id}`)
 .then(response => {
  dispatch({type: SUCCESS, payload: response.data})
 })
  .catch(() => {
   dispatch({type: FAILURE, payload: "Smurf not removed."})
  })
 }

 export const updateSmurf = (id, obj) => dispatch => {
  axios
  .put(`http://localhost:3333/smurfs/${id}`, obj)
  .then(response => {
   dispatch({type: SUCCESS, payload: response.data})
  })
  .catch(err =>  {
   dispatch({type: FAILURE, payload: 'Smurf not added.'})
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
