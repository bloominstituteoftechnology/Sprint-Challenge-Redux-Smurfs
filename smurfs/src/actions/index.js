import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADDED_SMURF = "ADDED_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const GOT_SMURFS = "GOT_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const GETTING_SMURFS = "GETTING_SMURFS";

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
const smurfs = axios.get('http://localhost:3333/smurfs');

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfs.then(({data}) => {
      dispatch({ type: GOT_SMURFS, payload: data })
    })
    .catch(err => console.error(err));
  }
}

export const addSmurfs = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(({ data }) => {
      dispatch => ({ ADDED_SMURF });
    })
    .catch(err => console.error(err));
  }
}
