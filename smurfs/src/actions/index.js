/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const ADD_SMURFS = 'ADD_SMURFS'
export const ADDING_SMURFS = 'ADDING_SMURFS'
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const ERROR = 'ERROR'

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

 export const fetchSmurf = () =>{
  return dispatch => {
    dispatch({type:FETCHING_SMURFS})
    axios.get('http://localhost:3333/smurfs').then(response => {
      console.log(response);
      dispatch({type:FETCH_SMURFS, payload:response.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({type:ERROR, error: err})
    })
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({type:ADDING_SMURFS})
    axios.post("http://localhost:3333/smurfs",{name: smurf.name, age: smurf.age, height: smurf.height})
    .then(response => {
      console.log(response);
      dispatch({type:ADD_SMURFS, payload: response.data})
    })
  }
}

