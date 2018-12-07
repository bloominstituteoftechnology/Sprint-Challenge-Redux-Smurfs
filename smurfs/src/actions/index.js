import axios from "axios"

export const FETCHING="FETCHING";
export const SUCCESS="SUCCESS";
export const FAILURE="FAILURE";
export const ADDING="ADDING";
export const DELETING="DELETING";

export const getSmurfs = () => (dispatch) => {
  dispatch({type:FETCHING})
  axios
  .get("http://localhost:3333/smurfs")
  .then(response => {
    dispatch({type:SUCCESS,payload: response.data})

  })
  .catch(
    error => {
      console.log(error)
      dispatch({type:FAILURE,payload: error})
    })
}

export const addSmurf = (input) => (dispatch) =>{
  dispatch({type:ADDING})
  return(
    axios
    .post("http://localhost:3333/smurfs",input)
    .then(response => {
      dispatch({type:SUCCESS,payload: response.data})
      return true
    })
    .catch(
      error => {
        console.dir(error)
        alert(error.response.data.Error)
        dispatch({type:FAILURE,payload: error})
        return false
      })
  )
}

export const deleteSmurf = (input) => (dispatch) =>{
  dispatch({type:DELETING})
  axios
  .delete(`http://localhost:3333/smurfs/${input}`)
  .then(response => {
    dispatch({type:SUCCESS,payload: response.data})
    return true
  })
  .catch(
    error => {
      console.dir(error)
      alert(error.response.data.Error)
      dispatch({type:FAILURE,payload: error})
      return false
    })
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
