import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const CREATE_SMURF = "CREATE_SMURF";
export const ADDING_SMURF_SUCC = "ADDING_SMURF_SUCC";
export const ADDING_SMURF_FAIL = "ADDING_SMURF_FAIL";
export const DELETING_SMURF = "DELETING_SMURF";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: ADDING_SMURF_SUCC, payload: res.data }))
    .catch(err => dispatch({type: ADDING_SMURF_FAIL, payload: err }))
}
export const addSmurf = () => dispatch => {
  dispatch({ type: CREATE_SMURF }); 
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: ADDING_SMURF_SUCC, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_SMURF_FAIL,
    payload: err }))
}
export const deleteSmurf = () => dispatch => {
  dispatch({ type: DELETING_SMURF });
  axios
    .get('http://localhost:3333/smurfs')
    .then( res => dispatch({type: DELETING_SMURF, payload: res.data}))
    .catch(err => {
      dispatch({type: DELETING_SMURF});
    });
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
