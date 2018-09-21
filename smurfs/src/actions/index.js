/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD = 'ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_ERROR = 'ADD_ERROR';



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
export const fetchSmurf = () => {
  return dispatch => {

      dispatch({ type: FETCH});
      axios
          .get('http://localhost:3333/smurfs')
          .then(response => {
              dispatch({ type: FETCH_SUCCESS, payload: response.data});
          })
          .catch( err => {
              console.log(err);
              dispatch({ type: FETCH_ERROR });
          });
  };
};


export const addSmurf = (smurf) => {
  return dispatch => {
      dispatch({ type: ADD});
      axios.post('http://localhost:3333/smurfs',smurf)
          .then(response => {
              dispatch({ type: ADD_SUCCESS, payload: response.data});
          })
          .catch( err => {
              console.log(err);
              dispatch({ type: ADD_ERROR });
          });
  };
};

