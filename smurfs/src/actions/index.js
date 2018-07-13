import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';

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
  const smurfData = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch({ type: FETCHING });
    smurfData.then(({data}) => {
      console.log(data)
      dispatch({type: FETCHED, payload: data});
    })
      .catch(err => { dispatch({type: ERROR, payload: err})})
  }
};

export const addSmurf = newSmurf => {
  const smurfData = axios.post("http://localhost:3333/smurfs", newSmurf);
  return function(dispatch) {
    dispatch({ type: ADDING });
    smurfData.then(({data}) => {
      dispatch({type: ADDED, payload: data});
    })
      .catch(err => {dispatch({type : ERROR, payload: err})})
  }
};