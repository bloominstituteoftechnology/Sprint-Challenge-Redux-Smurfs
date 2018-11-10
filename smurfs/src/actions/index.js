import axios from 'axios';

export const LOADING = 'LOADING'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const FAILURE = 'FAILURE'
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
export const fetchSmurfs = () =>{
  return dispatch=>{
    dispatch({ type: LOADING, payload: `Hold tight we trying to grab those slippery buggers....`});
    axios
      .get('http://localhost:3333/smurfs')
      .then(response =>{
        dispatch({ type: ADD_SUCCESS, payload: response.data })
      })
      .catch(err =>{
        dispatch({ type:FAILURE, payload:'Error fetching Smurfs'})
      })
  }
}
export const addSmurf = () =>{

}