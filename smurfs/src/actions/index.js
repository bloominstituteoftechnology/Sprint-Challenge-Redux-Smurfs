/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
  import axios from 'axios';

  export const FETCHING = 'FETCHING';
  export const LOADING = 'LOADING';
  export const ERROR = 'ERROR';
  export const ADD_SMURF = 'ADD_SMURF';
  export const SUCCESS = 'SUCCESS';
  export const UPDATE_SMURF = 'UPDATE_SMURF';
  export const DELETE_SMURF = 'DELETE_SMURF';

  export const getSmurfs = () => {
     return (dispatch) => {
         dispatch({type: LOADING})
         axios.get('http://localhost:3333/smurfs')
              .then( response => {
                  console.log("server data:" + response);
                  dispatch({type:SUCCESS, payload: response.data })
              })
              .catch( error => {
                 dispatch({type:ERROR, payload: "Not getting the data"})
              })
     }
  }

  export const addSmurfs = (newSmurf) => {
      return (dispatch) => {
         dispatch({type: LOADING})
         axios.post('http://localhost:3333/smurfs', newSmurf)
              .then( response => {
                  dispatch({type:SUCCESS, payload: response.data})
              })
              .catch( error => {
                  dispatch({type: ERROR, payload: "Unable to add smurf"})
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
