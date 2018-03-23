import axios from 'axios';

export const FETCHINGSMURF = 'FETCHINGSMURF';
export const FETCHEDSMURF = 'FETCHEDSMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHINGSMURF})
    axios.get('http://localhost:3333/smurfs')
    .then(({ data }) => {
      dispatch({ type: FETCHEDSMURF, payload: data});
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error});
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
