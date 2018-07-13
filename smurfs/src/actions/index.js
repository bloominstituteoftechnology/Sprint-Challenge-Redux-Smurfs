import axios from 'axios';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURFS' });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: 'SMURFS_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: 'ADDING_SMURF' });
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        dispatch({ type: 'SMURF_ADDED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURF' });
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const editSmurf = () => {
  return {

  }
}

export const deleteSmurf = () => {
  return {

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
