//actions
import axios from 'axios';

export const GETTING_SMURFS from 'GETTING_SMURFS';
export const GOT_SMURFS from 'GOT_SMURFS';
export const ERROR from 'ERROR';
export const ADDING_SMURF from 'ADDING_SMURF';
export const UPDATING_SMURF from 'UPDATING_SMURF';
export const DELETING_SMURF from 'DELETING_SMURF';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const addSmurfs = () => {
  return function(dispatch){
    dispatch({type: GETTING_SMURFS})
    axios.get(`http://localhost:3333/smurfs`).then(res => {
      dispatch({type: GOT_SMURFS, payload: res.data}).catch(err => {
        dispatch({type: ERROR, payload: err})
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
