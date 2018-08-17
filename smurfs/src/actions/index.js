import axios from 'axios'

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDING_SMURF = 'ADDING_SMURF'
export const ADDED_SMURF = 'ADDED_SMURF'
export const GETTING_SMURF = 'GETTING_SMURF'
export const GET_SMURF = 'GET_SMURF'
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const UPDATED_SMURF = 'UPDATED_SMURF'
export const DELETING_SMURF = 'DELETING_SMURF'
export const DELETED_SMURF = 'DELETED_SMURF'
export const ERROR = 'ERROR'

const URL = 'http://localhost:3333/smurfs'

export const gettingSmurf = () =>{
  const smurf = axios.get(`${URL}`); 
  return dispatch => {
    dispatch ({type: GETTING_SMURF});
    smurf
    .then(response => {
      dispatch({type: GET_SMURF, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }; 
}

export const createSmurf = smurfs =>{
  const newSmurf = axios.post(`${URL}`, smurfs); 
  return dispatch => {
    dispatch({type: ADDING_SMURF}); 
    newSmurf
    .then(({data})=>{
      dispatch({type: ADDED_SMURF, payload: data})
    })
    .catch(err =>{
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const deleteSmurf = id => {
  const deletedSmurf = axios.delete(`${URL}/123`, deleteSmurf, {
    data: {id}
  }); 
  return dispatch =>{
    dispatch({type: DELETING_SMURF});
    deletedSmurf
    .then(({data})=>{
      dispatch({type: DELETED_SMURF, payload: data}); 
    })
    .catch(err => {
      ({type: ERROR, payload: err})
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
