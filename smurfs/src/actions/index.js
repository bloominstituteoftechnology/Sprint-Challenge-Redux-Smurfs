import axios from 'axios'

export const FETCHED = "FETCHED"
export const FETCHING = "FETCHING"
export const ERROR = "ERROR"
export const POSTING = "POSTING"
export const POSTED = "POSTED"
export const DELETING = "DELETING"
export const DELETED = "DELETED"

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCHED, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: ERROR })
      })
  }
}

export const addSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type: POSTING })
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(res => {
        dispatch({ type: POSTED, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: ERROR })
      })
  }
}

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: DELETING })

    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: DELETED, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: ERROR })
      })
    window.location.reload()
  }
}
