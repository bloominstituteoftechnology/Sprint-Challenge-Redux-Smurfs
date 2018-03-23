import axios from 'axios';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_ERR = 'ADD_SMURF_ERR';

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(({data}) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, smurfs: data })
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURFS_ERROR, fetchSmurfsErrMsg: "Unable to retrieve smurfs." })
    })
}

export const addSmurfs = (smurf) => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(({data}) => {
      dispatch({ type: ADD_SMURF, smurfs: data })
    })
    .catch(error => {
      dispatch({ type: ADD_SMURF_ERR, addSmurfErrMsg: "Unable to add new smurf." })
    })
}

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf (create)
   R - getSmurfs (fetch)
   U - updateSmurf (update)
   D - deleteSmurf (delete)
*/
