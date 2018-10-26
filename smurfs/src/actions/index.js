import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const POST_SMURF = 'POST_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const PUT_SMURF = 'PUT_SMURF';

const url = 'http://localhost:3333/smurfs';


export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get(url)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: POST_SMURF });
  axios
    .post(url, smurf)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({type: FAILURE, payload: error});
    })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`${url}/${id}`)
    .then(response => {
      dispatch({type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    })
}

export const editSmurf = smurf => dispatch => {
  dispatch({ type: PUT_SMURF });
  axios
    .put(`${url}/${smurf.id}`, smurf)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error });
    })
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
