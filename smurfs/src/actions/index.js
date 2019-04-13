// Action Types 
import axios from 'axios'
 export const FETCHING_SMURFS = "FETCHING_SMURFS"
 export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
 export const FETCHING_FAILURE = "FETCHING_FAILURE"
 export const ADD_SMURFS_START = "ADD_SMURFS_START"
 export const ADD_SMURFS = "ADD_SMURFS"
 export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"
 
 


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

 export const getsmurf = (thegoods) => dispatch =>{
  dispatch({type: FETCHING_SMURFS})

  axios.get(
      `http://localhost:3333/smurfs`, thegoods
  )
  .then(res =>{
       console.log(res
          )
  //  localStorage.setItem('token', res.data.payload)
      dispatch({
          type:FETCHING_SUCCESS,
          payload: res.data, 
          
      })
  })
  .catch(err =>{
      dispatch({
          type:FETCHING_FAILURE,
          payload: err

      })
  })
  
  
 
}

export const addSmurf = (smurf) => dispatch =>{
  axios.post(
      `http://localhost:3333/smurfs`, smurf,
      // {headers: {authorization:localStorage.getItem('token')}}
  )
      .then(res =>{
          dispatch({ 
              type:ADD_SMURFS,
              payload: res.data 
          
          })
      })
      .catch(err =>
        dispatch({
          type:ADD_SMURF_FAILURE,
          payload:err
        })
        )
      

  
}