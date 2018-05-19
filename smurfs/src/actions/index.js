import axios from 'axios'

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETING_SMURF = "DELETE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const ERROR = "ERROR";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch({
      type: FETCHING_SMURFS
    });
    getSmurfs
      .then(response => {
        dispatch({
          type: FETCH_SMURFS,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      })
  }
}
export const addSmurfs = smurf => {
  const add = axios.post('http://localhost:3333/smurfs', smurf);
  return function(dispatch) {
    dispatch({
      type: ADDING_SMURF
    });
    add
      .then(response => {
        dispatch({
          type: ADD_SMURF,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
      })
  }
}

export const updateSmurfs = (smurf, id) => {
  const update = axios.put(`http://localhost:3333/smurfs/${id}`, {name: smurf.name, age: smurf.age, height: smurf.height});
  return function(dispatch) {
    dispatch({
      type: UPDATING_SMURF
    });
    update
      .then(response => {
        dispatch({
          type: UPDATE_SMURF,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        })
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
