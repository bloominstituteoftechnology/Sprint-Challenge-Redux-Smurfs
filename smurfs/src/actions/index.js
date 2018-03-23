import axios from 'axios';

export const  FETCHING  = 'FETCHING';
export const  FETCHED  = 'FETCHED';
export const  ADDING  = 'ADDING';
export const  ADDED  = 'ADDED';
export const ERROR  = 'ERROR';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
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

export const getSmurfs = () => dispatch => {
  dispatch(
    { type: FETCHING }
  );
  axios.get(`http://localhost:3333/smurfs`)

  .then(response => {
    dispatch({
      type: FETCHED, smurfs: response.data
    })
  })
  .catch(error => {
    dispatch({
      type: ERROR, errorMessage: 'There was an error fetching the data'
    })
  })
}


export const addSmurf = (name, age, height) => dispatch => {
  dispatch(
    { type: ADDING }
  );
  axios.post(`http://localhost:3333/smurfs`, {
    name: name,
    age: age,
    height: height
  })
  .then(response => {
    dispatch({
      type: ADDED, smurfs: response.data
    })
  })
  .catch(error => {
    dispatch({
      type: ERROR, errorMessage: 'There was an error fetching the data'
    })
  })
}


export const deleteSmurf = (id) => dispatch => {
  dispatch(
    { type: DELETING }
  );
  axios.delete(`http://localhost:3333/smurfs/${id}`) 
  .then(response => {
    dispatch({
      type: DELETED, 
    })
  })
  .catch(error => {
    dispatch({
      type: ERROR, errorMessage: 'There was an error fetching the data'
    })
  })
}



