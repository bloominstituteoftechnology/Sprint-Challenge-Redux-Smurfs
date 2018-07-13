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

export const ADD_SMURF = 'ADD_SMURF'
export const ADDING_SMURF = 'ADDING_SMURF'
export const GET_SMURFS = 'GET_SMURFS'
export const GETTING_SMURFS = 'GETTING_SMURFS'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'
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

export const addSmurf = e => async dispatch => {

  e.preventDefault()

  const {
    name,
    age,
    height
  } = e.target.elements

  dispatch({ type: ADDING_SMURF })

  try {

    const {
      data: smurfs
    } = await post('http://localhost:3333/smurfs', {
      name: name.value, 
      age: age.value, 
      height: height.value
    })
    
    dispatch({ type: ADD_SMURF, smurfs })

  } catch(error) {
    
     dispatch({ type: ERROR, error }) 

  }

}
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
