import axios from 'axios';
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type:LOADING})
    axios.get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({type: SUCCESS, smurfs: response.data})
    })
    .catch(error => {
      dispatch({type:ERROR, errorMessage: "Where are all the Smurfs at? You did something wrong!"})
    })
  }
}

export const addSmurfs = (newSmurf) => {
  return(dispatch) =>{
    dispatch({type:LOADING})
    axios.post("http://localhost:3333/smurfs", newSmurf)
    .then(response =>{
      dispatch({type:SUCCESS, smurfs:response.data})
    })
    .catch(err => {
      dispatch({type:ERROR, errorMessage: "Not sure what you did but now your in Smurf Limbo"})
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
