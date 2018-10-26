import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS='FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const CREATING = 'CREATING';
export const CREATING_SUCCESS='CREATING_SUCCESS';
export const CREATING_FAILURE = 'CREATING_FAILURE';

export const DELETING = 'DELETING';
export const DELETING_SUCCESS='DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';

export const UPDATING = 'UPDATING';
export const UPDATING_SUCCESS='UPDATING_SUCCESS';
export const UPDATING_FAILURE = 'UPDATING_FAILURE';



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
const url='http://localhost:3333/smurfs';

export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCHING});
axios.get(`${url}`)
.then(response=>{
  dispatch({type: FETCHING_SUCCESS, payload:response.data})
})
.catch(error=>{
  dispatch({type: FETCHING_FAILURE, payload: error})
})
}

export const addSmurf = newSmurf => dispatch => {
  dispatch({type:CREATING});
  axios.post(`${url}`, newSmurf)
  .then(response => {
    dispatch({type: CREATING_SUCCESS, payload:response.data})
  })
    .catch(error=>{dispatch({type:CREATING_FAILURE, payload: error})})
  
}

export const deleteSmurf = id => dispatch => {
  dispatch({type:DELETING});
  axios.delete(`${url}/${id}`)
  .then(response=>{
    dispatch({type:DELETING_SUCCESS, payload:response.data})
  })
  .catch(error =>{
    dispatch({type:DELETING_FAILURE, payload:error})
  })
}

export const updateSmurf = (id, updatedSmurf) => dispatch =>{
  dispatch({type:UPDATING});
  axios.put(`${url}/${id}`, updatedSmurf)
  .then(response=>{
    dispatch({type:UPDATING_SUCCESS, payload:response.data})
  })
  .catch(error=>{
    dispatch({type:UPDATING_FAILURE, payload:error})
  })
}