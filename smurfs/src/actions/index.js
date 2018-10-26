/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
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
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF"
export const ADDED = "ADDED"
export const FETCHED = "FETCHED"

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type:FETCHING_SMURFS });
  axios
    .get(URL)
    .then(response => {
      console.log("Axios .then call",response.data)
      dispatch({
        type : FETCHED,
        payload : response.data,
      })
    })
    .catch(error => alert(error))
}

export const addSmurf = (newSmurf) => dispatch => {
  dispatch({ type : ADDING_SMURF });

  axios.post(URL,newSmurf)
  .then(response => {
    dispatch({type : ADDED, payload : response.data})
  })
  .catch(error => alert(error));
}
