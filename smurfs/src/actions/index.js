import axios from 'axios'

export const FETCHING = 'FETCHING'
export const ADDING = 'ADDING'
export const UPDATING = 'UPDATING'
export const DELETING = 'DELETING'
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
  console.log(response.data)
  dispatch({type: SUCCESS, payload: response})
 })
 .catch(err => {
  console.log(err)
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
