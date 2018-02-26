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
export const ERROR = "ERROR";

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
  const smurfsUrl = axios.get('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfsUrl.then(({data}) => {
      dispatch({ type: GOT_SMURFS, payload: data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err})
    });
  }
}

export const addSmurfs = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(({ data }) => {
      dispatch({ type: ADDED_SMURF });
    })
    .then(() => {
      dispatch({ type: GETTING_SMURFS })
      axios.get('http://localhost:3333/smurfs')
      .then(({ data }) => {
        dispatch({ type: GOT_SMURFS, payload: data})
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err})
      })
    })
    .catch(err => console.error(err));
  }
}


