import axios from 'axios';


/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'

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
    dispatch({type: FETCH_SMURFS})
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      dispatch({ type: FETCHED_SMURFS, payload: response.data})
    })
    .catch (error => dispatch({type: ERROR, payload: error}))
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({type: ADD_SMURF})
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({type: ADDED_SMURF, payload: response.data})
    })
    .catch (error => {
      dispatch({ type: ERROR, payload: error});
    })
  }
}
