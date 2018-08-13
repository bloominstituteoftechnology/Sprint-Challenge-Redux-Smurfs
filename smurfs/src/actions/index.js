/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING_SMURF = 'FETCHING_SMURF'; 
export const FETCHED_SMURF = 'FETCHED_SMURF'; 
export const ERROR = 'ERROR'; 
export const ADDING_SMURF = 'ADDING_SMURF'; 
export const ADD_SMURF = 'ADD_SMURF'; 
export const DELETING = 'DELETING'; 
export const DELETED = 'DELETED'; 
export const UPDATING = 'UPDATING'; 
export const UPDATED = 'UPDATED'; 
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
export const gettingSmurf = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    getSmurfs.then(response => {
      console.log('response data: ', response.data)
      dispatch({ type: FETCHED_SMURF, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}

export const addSmurf = (smurf) => {
  const promise= axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
      dispatch({ type: ADDING_SMURF });
      promise.then(response => {
        console.log('added smurf response: ', response.data)
          dispatch({ type: ADD_SMURF, payload: response.data})

      })
      .catch(err => {
          dispatch({ type: ERROR, payload: err });
      })
  }
}

export const deleteSmurf = (id) => {
  const clearSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`)
  return dispatch => {
    dispatch({ type: DELETING });
    clearSmurf.then(response => {
      dispatch({ type: DELETED, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
  })
  }
}
export const updateSmurf = (smurf) => {
  const putSmurf = axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf);
  return dispatch => {
    dispatch({ type: UPDATING });
    putSmurf.then( res => {
        dispatch({ type: UPDATED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
    })
  }
}