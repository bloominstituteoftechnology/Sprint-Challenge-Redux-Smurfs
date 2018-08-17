//actions
import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const ERROR = 'ERROR';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getTheSmurfs = () => {
  return function(dispatch){
    dispatch({type: GETTING_SMURFS});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({type: GOT_SMURFS, payload: res})
    })
    .catch(err => {
        console.log('error')
        dispatch({type: ERROR, payload: err})
    })
  }
}

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';
export const DELETING_SMURF = 'DELETING_SMURF';

export const addASmurf = (newSmurf) => {
  return function(dispatch){
    dispatch({type: ADDING_SMURF});
    axios.post(`http://localhost:3333/smurfs`, {
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height,
    }).then(res => {
      dispatch({type: ADDED_SMURF, payload: res});
      dispatch(getTheSmurfs());
    }).catch(err => {
      dispatch({type: ADD_SMURF_FAILED, payload: err})
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
