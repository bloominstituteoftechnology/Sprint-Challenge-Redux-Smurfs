import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const SMURFS_RECEIVED = 'SMURFS_RECEIVED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR = 'ERROR';
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
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
      .then(({data}) => {
        dispatch({ type: SMURFS_RECEIVED, payload: data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}

export const createSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(({data}) => {
        dispatch({ type: SMURF_ADDED, payload: data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}

export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(() => {
        dispatch({ type: SMURF_DELETED }) // no payload as this server does not return anything on delete
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      })
  }
}