/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios'
export const GET_SMURFS = 'GET_SMURFS'
export const LOADING = 'loading'
export const DELETE_SMURFS = 'DELETE_SMURFS'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const ERROR = "ERROR"

export const getSmurfs = () => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get(`http://localhost:3333/smurfs/`)
    .then(response => {
      dispatch({type: GET_SMURFS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: Error, payload: err.errorMessage})
    })
  }
}

// export const deleteSmurf = (age) => {
//   return (dispatch) => {
//     dispatch({type: LOADING})
//     axios.delete(`http://localhost:3333/smurfs/${age}`)
//     .then(response => {
//       dispatch({type: DELETE_SMURFS, smurfs: response.data})
//     })
//   }
// }


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
