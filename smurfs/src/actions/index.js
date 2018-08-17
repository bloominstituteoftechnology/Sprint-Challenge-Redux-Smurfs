import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const DELETE_SMURF = "DELETE_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
export const EDIT_SMURF = "EDIT_SMURF";
export const SMURF_EDITED = "SMURF_EDITED";

export const fetchSmurfs = () => {
  return function(dispatch) {
      dispatch({ type: FETCHING_SMURFS });
      axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        console.log(response.data);
          dispatch({ type: SMURFS_FETCHED, payload: response.data });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const addNewSmurf = (name, age, height) => {
  return function(dispatch) {
      dispatch({ type: ADD_SMURF });
      axios
     .post(`http://localhost:3333/smurfs`, {
      name: name,
      age: age,
      height: height
      })
      .then(response => {
          dispatch({ type: SMURF_ADDED, payload: response.data[response.data.length - 1] });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const deleteSmurf = id => {
  return function(dispatch) {
      dispatch({ type: DELETE_SMURF });
      axios
     .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          dispatch({ type: SMURF_DELETED, payload: response.data });
      })
      .then(() => {
        window.location.reload(true);
    })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const editSmurf = (name, age, height, id) => {
  return function(dispatch) {
      dispatch({ type: EDIT_SMURF });
      axios
      .put(`http://localhost:3333/smurfs/${id}`, {
          name: name,
          age: age,
          height: height
          })
      .then(response => {
          dispatch({ type: SMURF_EDITED, payload: response.data });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}