import axios from 'axios';

export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_ERR = 'ADD_SMURF_ERR';
export const UPDATE_SMURFS = 'UPDATE_SMURFS';
export const UPDATE_SMURF_ERROR = 'UPDATE_SMURF_ERROR';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const DELETING_SMURF = 'DELETING_SMURF';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURFS })
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(({data}) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, smurfs: data })
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURFS_ERROR, fetchSmurfsErrMsg: "Unable to retrieve smurfs." })
    })
}

export const addSmurfs = (smurfette) => dispatch => {
  dispatch({ type: ADDING_SMURFS })
  axios
    .post(`http://localhost:3333/smurfs`, smurfette)
    .then(({data}) => {
      dispatch({ type: ADD_SMURF, smurfs: data })
    })
    .catch(error => {
      dispatch({ type: ADD_SMURF_ERR, addSmurfErrMsg: "Unable to add new smurf." })
    })
}

export const updateSmurf = (smurfette, id) => dispatch => {
  dispatch({ type: UPDATING_SMURFS })
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurfette)
    .then(({data}) => {
      dispatch({ type: UPDATE_SMURFS, smurfs: data })
    })
    .catch(error => {
      dispatch({ type: UPDATE_SMURF_ERROR, updateErrMsg: 'There was a problem updating.' })
    })
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF })
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(({data}) => {
      dispatch({ type: DELETE_SMURF, smurfs: data})
    })
    .catch(error => {
      dispatch({ type: DELETE_SMURF_ERROR, deleteErrMsg: 'Could not remove requested smurfette.'})
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
