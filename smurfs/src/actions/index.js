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

export const ADDSMURF = 'ADDSMURF';

export const GETSMURFS = 'GETSMURFS';
export const SMURFS_RECEIVED = 'SMURFS_RECEIVED';
export const ERROR_GETTING_SMURFS = 'ERROR_GETTING_SMURFS';

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GETSMURFS })
    axios
    .get(`${url}`)
    .then(response => {
      dispatch({ type: SMURFS_RECEIVED, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: ERROR_GETTING_SMURFS, payload: error })
    })
  }
}
