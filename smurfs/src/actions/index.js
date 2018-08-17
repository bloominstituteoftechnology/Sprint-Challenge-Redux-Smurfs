import axios from 'axios'; 

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS'; 
export const POSTING_SMURF = 'POSTING_SMURF';
export const POSTED_SMURF = 'POSTED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF'; 
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ERROR = 'ERROR'; 



/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
const url = 'http://localhost:3333/smurfs/';
export const getSmufs = () => {
  const promise = axios.get(url)
  return dispatch => {
    dispatch({type:FETCHING_SMURFS})
    promise.then(response => {
      console.log(response) // console.log for now... delete later... 
      dispatch({type: FETCHED_SMURFS, payload: response.data})
    })
    .catch(error => {
      console.log(error) // console.log for now... delete later.. 
      dispatch({type: ERROR, error: error})
    })
  }
}

export const addSmurf = (smurf) => {
  const promise = axios.post(url, smurf); 
  return dispatch => {
    dispatch({type:POSTING_SMURF})
    promise.then(response => {
      console.log(response) // console.log for now... delete later.. 
      dispatch({type: POSTED_SMURF, payload: response.data})
    })
    .catch(error => {
      console.log(error) // console.log for now... delete later.. 
      dispatch({type:ERROR, error: error}) 
    })
  }
}

export const updateSmuf = (id, smurf) => {
  const promise = axios.put(`${url}${id}`, smurf);
  return dispatch => {
    dispatch({type:UPDATING_SMURF})
    promise.then(response => {
      console.log(response) // console.log for now... delete later... 
      dispatch({type: UPDATED_SMURF, payload: response.data})
    })
    .catch(error => {
      console.log(error) // console.log for now.. delete later.. 
      dispatch({type: ERROR, error: error})
    })
  }
}

export const deleteSmurf = (id) => {
  const promise = axios.delete(`${url}${id}`)
  return dispatch => {
    dispatch({type: DELETING_SMURF})
    promise.then(response => {
      console.log(response)
      dispatch({type:DELETED_SMURF, payload: response.data})
    })
    .catch(error => {
      console.log(error) // console.log for now... delete later... 
      dispatch({type:ERROR, error: error})
    })
  }
}
