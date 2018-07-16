import axios from 'axios'

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR_ADDING_SMURF = 'ERROR_ADDING_SMURF';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const ERROR_FETCHING_SMURF = 'ERROR_FETCHING_SMURF';
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
        dispatch({type : ERROR_FETCHING_SMURF, payload : `Error Fetching Smurf with error ${err}`})
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type : ADDING_SMURF })
    axios.post('http://localhost:3333/smurfs', smurf )
      .then(({ data }) => {
        dispatch({ type : ADDED_SMURF, payload : data })
      })
      .catch(err => {
        dispatch({ type : ERROR_ADDING_SMURF, payload : `Error Adding Smurf with error ${err}` })
      })

  }
}
