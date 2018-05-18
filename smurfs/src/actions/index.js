/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'; 
export const SMURFS_FETCHED = 'SMURFS_FETCHED'; 
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ERROR = 'ERROR';   
export const ADD_SMURF = 'ADD_SMURF'; 
export const SMURF_ADDED = 'SMURF_ADDED'; 

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
  const fetchSmurfs = axios.get('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch ({ type: FETCHING_SMURFS });
    fetchSmurfs
      .then(someData => {
        dispatch({ tyoe: SMURFS_FETCHED, payload: someData.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err }); 
      });
   };    
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/add`, smurf);
  return function(dispatch) {
    dispatch({ type: ADD_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: SMURF_ADDED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      })
  };
};