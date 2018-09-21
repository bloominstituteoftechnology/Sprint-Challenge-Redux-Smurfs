import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDED_SMURFS = 'ADDED_SMURFS';
export const UPDATING_SMURFS = 'UPDATING_SMURFS';
export const UPDATED_SMURFS = 'UPDATED_SMURFS';
export const DELETING_SMURFS = 'DELETING_SMURFS';
export const DELETED_SMURFS = 'DELETED_SMURFS';
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
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: FETCHED_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURFS });
    axios
      .post(`http://localhost:3333/smurfs`, {
        name: smurf.name,
        age: smurf.age,
        height: smurf.height
      })
      .then(res => {
        dispatch({ type: ADDED_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  }
}

export const deleteSmurf = smurfId => {
  return dispatch => {
    dispatch({ type: DELETING_SMURFS })
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => {
        dispatch({ type: DELETED_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  }
}

export const updateSmurf = smurf => {
  return dispatch => {
    dispatch({ type: UPDATING_SMURFS });
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    })
      .then(res => {
        dispatch({ type: UPDATED_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err});
      })
  }
}