import {
  get,
  post,
  put,
  delete as _delete
} from 'axios'


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADD_SMURFS = 'ADD_SMURFS'
export const ADDING_SMURFS = 'ADDING_SMURFS'
export const GET_SMURFS = 'GET_SMURFS'
export const GETTING_SMURFS = 'GETTING_SMURFS'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const UPDATING_SMURFS = 'UPDATING_SMURFS'
export const DELETE_SMURFS = 'DELETE_SMURFS'
export const DELETING_SMURFS = 'DELETING_SMURFS'
export const ERROR = 'ERROR'

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

export const addSmurf = () => dispatch => {}
export const getSmurfs = () => async dispatch => {
 
  dispatch({ type: GETTING_SMURFS })
  
  try {
  
    const { 
      data: smurfs 
    } = await get('http://localhost:3333/smurfs') 

    dispatch({ type: GET_SMURFS, smurfs })

  } catch(error) {

      dispatch({ type: ERROR, error})
    
  }
}
export const updateSmurf = () => dispatch => {}
export const deleteSmurf = () => dispatch => {}
