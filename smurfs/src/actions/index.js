/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios"

export const GET_START = "GET_START"
export const GET_SUCCESS = "GET_SUCCESS"
export const GET_ERROR = "GET_ERROR"

export const POST_START = "POST_START"
export const POST_SUCCESS = "POST_SUCCESS"
export const POST_ERROR = "POST_ERROR"

export const UPDATE_START = "UPDATE_START"
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export const UPDATE_ERROR = "UPDATE_ERROR"

export const DELETE_START = "DELETE_START"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_ERROR = "DELETE_ERROR"
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

export const getSmurfs = () => dispatch => {
    dispatch ({type: GET_START})
    axios
        .get("http://localhost:3333/smurfs")
        .then(res =>{
            dispatch({type: GET_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: GET_ERROR, payload: err.data})
        })
}

export const postSmurf = (smurf) => dispatch => {
    dispatch ({type: POST_START})
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res =>{
            dispatch({type: POST_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: POST_ERROR, payload: err.data})
        })
}

export const updateSmurf = (smurf) => dispatch => {
    dispatch ({type: UPDATE_START})
    axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(res =>{
            dispatch({type: UPDATE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: UPDATE_ERROR, payload: err.data})
        })
}

export const deleteSmurf = (smurf) => dispatch => {
    dispatch ({type: DELETE_START})
    axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res =>{
            dispatch({type: DELETE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({type: DELETE_ERROR, payload: err.data})
        })
}