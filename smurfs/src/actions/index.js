import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// export const FETCHING_SMURFS = "FETCHING_SMURFS";
// export const FETCHED_SMURFS = "FETCHED_SMURFS";
// export const SMURF_ERROR = "SMURF_ERROR";
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
export const fetchSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs'); 
  return (dispatch) => {
    dispatch({type: "FETCHING_DATA"})
    request.then(({data}) => {
      dispatch({type: 'DATA_FETCHED', payload: data}); 
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }
}

export const addSmurf = (newSmurf) => {
  const request = axios.post('http://localhost:3333/smurfs', newSmurf); 
  return (dispatch) => {
    dispatch({type: "SAVING_DATA"})
    request.then(({data}) => {
      dispatch({type: 'DATA_SAVED', payload: data})
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }}