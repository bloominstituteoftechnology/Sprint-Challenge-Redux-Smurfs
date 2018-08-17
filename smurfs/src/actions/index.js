export const FETCHING_SMURFS = 'FETCHING_SMURFS';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const URL = 'http://localhost:3333/smurfs'
export const getsmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(URL)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({type: FETCH_ERROR, error: err})
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios 
    .post(URL, smurf)
    .then(response => {
      dispatch({ type: ADD_SUCCESS, results: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({type: FETCH_ERROR, error: err})
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
