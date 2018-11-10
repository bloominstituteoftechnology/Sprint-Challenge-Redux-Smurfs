/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios"

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const FAIL = "FAIL"

//GET
export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: FAIL,
          payload: "Oh No! The Smurfs are hiding. Please try again"
        })
      })
  }
}

//POST
export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
    .then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAIL,
        payload: "Looks like that Smurf did not want to join the village. Please try again"
      })
    })
  }
}

//POST
export const updateSmurf = (smurf) => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAIL,
        payload: "That Smurf doesn't want to be updated. Please try again"
      })
    })
  }
}

//DELETE
export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({type: LOADING})
    axios.put(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAIL,
        payload: "The Smurf refuses to leave. Please try again"
      })
    })
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
