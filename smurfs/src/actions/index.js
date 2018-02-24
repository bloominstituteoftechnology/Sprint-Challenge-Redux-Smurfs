/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';
export const IS_FETCHING = 'IS_FETCHING';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

export const getSmurfs = () => {
    const smurfs = axios.get('http://localhost:3333/smurfs'); 
       return dispatch => {
           dispatch({ type: IS_FETCHING });
           smurfs
             .then(response => {
                 dispatch({ type: SMURFS_FETCHED, payload: response.data });
                })
             .catch(err => {
                dispatch({ type: ERROR_FETCHING_SMURFS, payload: err });
        });
    };   
}; 

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
