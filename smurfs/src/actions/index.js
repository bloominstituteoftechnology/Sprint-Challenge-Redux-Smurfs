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
import axios from 'axios';
import { error } from 'util';

export const FETCHING_SMURFS = 'FETCHING_SMURFS'
export const FETCHED_SMURFS = 'FETCHED_SMURFS'
export const SAVING_SMURFS = 'SAVING_SMURFS'
export const SAVED_SMURFS = 'SAVED_SMURFS'
export const ERROR_SMURFS = 'ERROR_SMURFS'


export const getSmurfs = () => {
  return(dispatch) => {
    dispatch ({type: FETCHING_SMURFS });
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ FETCHED_SMURFS, payload: response.data });
    })
    .catch(error => dispatch({type: error.payload }))
  }
};