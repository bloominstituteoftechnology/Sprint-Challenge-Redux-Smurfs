import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const POST_SMURF = 'POST_SMURF';

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
