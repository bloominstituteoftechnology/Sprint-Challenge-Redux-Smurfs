import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
  export const SMURFS_FETCHED = 'SMURFS_FETCHED'
  export const SMURFS_SAVED = 'SMURFS_SAVED'
  export const SAVING_SMURFS = 'SAVING_SMURFS'
  export const UPDATING_SMURF = 'UPDATING_SMURF'
  export const SMURF_UPDATED = 'SMURF_UPDATED'
  export const DELETING_SMURF = 'DELETING_SMURF'
  export const SMURF_DELETED = 'SMURF_DELETED'
  export const SMURFS = 'SMURFS'
  export const ERROR = 'ERROR'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING_SMURFS})
    axios
      .get('http://localhost:3333/smurfs/')
      .then(response => { dispatch({type: SMURFS_FETCHED, payload: response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const saveSmurf = (smurf) => {
  return dispatch => {
    dispatch({type: SAVING_SMURFS});
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {dispatch({type: SMURFS_SAVED,}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
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
