import axios from 'axios'

const url = 'http://localhost:3333/smurfs'
export const FETCHING = 'FETCHING'
export const GET_SMURFS = 'GET_SMURFS'
export const ERROR = 'ERROR'

export const fetchSmurfs = () => {
  const request = axios.get(url)
  return (dispatch) => {
    dispatch({ type: FETCHING, payload: true })
    request
      .then((res) => {
        dispatch({ type: GET_SMURFS, payload: res.data })
        dispatch({ type: FETCHING, payload: false })
      })
      .catch((error) => dispatch({ type: ERROR, payload: error }))
  }
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
