import axios from 'axios'

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const SMURFS_FETCHED = 'SMURFS_FETCHED'
export const COLOSSAL_SMURF_UP = 'COLOSSAL_SMURF_UP'
export const ADDING_SMURF = 'ADDING_SMURF'
export const SMURF_ADDED = 'SMURF_ADDED'




export const fetchSmurfs = () => dispatch =>{
  dispatch({type: FETCHING_SMURFS})
  axios.get('http://localhost:3333/smurfs').then(({data}) => dispatch({type: SMURFS_FETCHED, payload: data }))
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
