import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const POSTING = 'POSTING';
export const POSTED = 'POSTED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED'
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

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });

    axios
         .get('http://localhost:3333/smurfs')
         .then(response => {
           dispatch({ type: FETCHED, smurfs: response.data})
         })
         .catch(error => {
           dispatch({ type: ERROR, errorMessage: 'Error Fetching the data'})
         })
}

export const addSmurf = (name, age, height) => dispatch => {
  dispatch({ type: POSTING });

    axios
         .post('http://localhost:3333/smurfs', { name, age, height })
         .then(response => {
           dispatch({ type: POSTED, smurfs: response.data })
         })
         .catch(error => {
           dispatch({ type: ERROR, errorMessage: 'Error Posting the data'})
         })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING });

    axios
         .delete(`http://localhost:3333/smurfs/${id}`)
         .then(response => {
           dispatch({ type: DELETED, smurfs: response.data })
         })
         .catch(error => {
           dispatch({ type: ERROR, errorMessage: 'Error Deleting the data'})
         })
}