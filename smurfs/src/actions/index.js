import axios from 'axios'
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const POSTING = 'POSTING';
export const ERROR = 'ERROR';
export const POSTED = 'POSTED';
export const DELETED = 'DELETED';
export const DELETING = 'DELETING';

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
const URL = 'http://localhost:3333/smurfs'
export const getSmurfs = () => {
  const request = axios.get(URL)
  return (dispatch) => {
    dispatch({ type: FETCHING })
    request.then(({ data }) => {
      return dispatch({ type: FETCHED, payload: data })
    })
      .catch(err => {
        return dispatch({ type: ERROR, payload: err })
      })
  }
}

export const addSmurfs = (smurf) => {
  return (dispatch) => {
    dispatch({ type: POSTING })
    axios
      .post(URL, smurf)
      .then((response) => {
        return dispatch({ type: POSTED, payload: response.data })
      })
      .catch(err => {
        return dispatch({ type: ERROR, payload: err })
      })
  }
}

export const removeSmurf = (id) => {
  return (dispatch) => {
    dispatch({type: DELETING})
    axios
      .delete(`${URL}/${id}`)
      .then((response) => {
        return dispatch({ type: DELETED, payload: response.data })
      })
      .catch(err => {
        return dispatch({ type: ERROR, payload: err })
      })
  }
}