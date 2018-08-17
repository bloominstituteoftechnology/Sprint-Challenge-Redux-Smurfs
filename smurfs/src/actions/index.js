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
export const getSmurfs = () => {
  const request = axios.get('http://localhost:3333/smurfs'); 
  return (dispatch) => {
    dispatch({type: "FETCHING_SMURF"})
    request.then(({data}) => {
      dispatch({type: 'SMURF_FETCHED', payload: data}); 
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }
}

export const addSmurf = (smurf) => {
  const request = axios.post('http://localhost:3333/smurfs', smurf); 
  return (dispatch) => {
    dispatch({type: "ADDING_SMURF"})
    request.then(({data}) => {
      dispatch({type: 'SMURF_ADDED', payload: data})
    }).catch((err) => {
      dispatch({type: "ERROR", payload: err})
    })
  }}