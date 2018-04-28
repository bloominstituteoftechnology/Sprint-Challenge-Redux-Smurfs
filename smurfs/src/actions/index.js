import axios from 'axios'
import {
  FETCHING,
  CREATING,
  UPDATING,
  DELETING,
  SUCCESS,
  ERROR,
} from './types'

const ROOT_URL = 'http://localhost:3333'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING })
  axios.get(`${ROOT_URL}/smurfs`)
    .then((response) => {

      console.log('response:', response)

      dispatch({ type: SUCCESS, payload: response.data })
    }).catch(error => dispatch({ type: ERROR, error }))
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING })
  axios.post(`${ROOT_URL}/smurfs`, smurf)
    .then((response) => {

      console.log(response)
      dispatch({ type: SUCCESS, payload: response.data })

    })
    .catch(e => {

      console.log(e)

    })
}

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
