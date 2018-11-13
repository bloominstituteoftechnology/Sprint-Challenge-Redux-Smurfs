import axios from "axios"
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURFS = 'ADD_SMURFS'
export const GET_SMURFS = 'GET_SMURFS'
export const UPDATE_SMURFS = 'UPDATE_SMURFS'
export const DELETE_SMURFS = 'DELETE_SMURFS'



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

export const getSmurfs = () =>{
  return dispatch =>{
    axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({
        type :GET_SMURFS,
        payload :response.data 
      })

})
  }
 }

export const addSmurf = (name,age,height) =>{
  return dispatch =>{
    axios
    axios.post("http://localhost:3333/smurfs",
    {name, age, height})
    .then(response => {
      dispatch({
        type :ADD_SMURFS,
        payload :response.data 
      })
})
  }
 }




export const updateSmurf = () =>{
  return { type : UPDATE_SMURFS }
}

export const deleteSmurf = (id) =>{
  return dispatch => {
      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({
          type :DELETE_SMURFS,
          payload :response.data 
        })  
  })}}
