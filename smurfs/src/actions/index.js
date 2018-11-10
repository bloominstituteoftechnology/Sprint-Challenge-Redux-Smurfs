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

import axios from 'axios';

export const LOADING = 'LOADING';
export const GET_SMURFS = 'GET_SMURFS';
export const ERROR = 'ERROR';

// GET (get all of the smurfs)
export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: LOADING });

    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the Smurfs from the database.'})
    })
  }
}

// POST (add a new smurf)
export const addSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'There was a problem adding your smurf to the database.'})
    })
  }
}

// DELETE (remove a smurf)
export const deleteSmurf = (id) => {
  return (dispatch) => {
    axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: GET_SMURFS, smurfs: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Problem deleting the smurf from the database.'})
    })
  }
}

// PUT (update a smurfs information)
export const updateSmurf = (updatedSmurf) => {
  return (dispatch) => {
    dispatch({ type: LOADING });

    axios
    .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`, updatedSmurf)
    .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: "Trouble updating smurf."})
    })    
    
  }
}