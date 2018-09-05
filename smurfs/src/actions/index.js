import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS'; 
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

export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs')
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
        .then(response =>{
          console.log("response", response);
          dispatch({ type: GOT_SMURFS, payload: response.data})
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err})
        });
        };
  }
