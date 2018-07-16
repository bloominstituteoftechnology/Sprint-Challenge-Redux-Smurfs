import axios from 'axios'

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = 'ADD_SMURF';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
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
export const getSmurf = () => {
  return dispatch => {
    dispatch({ type : FETCHING_SMURF })
    axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => {
          dispatch({ type : FETCHED_SMURF, payload : data})
      })
      .catch(err => {
        console.log(err)
      })
  }
}

