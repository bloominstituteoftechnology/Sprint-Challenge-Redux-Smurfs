import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GETTING_SMURFS_SUCCESS = 'GETTING_SMURFS_SUCCESS';
export const GETTING_SMURFS_FAILURE = 'GETTING_SMURFS_FAILURE';


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
export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GETTING_SMURFS })
  axios
    .get('http://localhost:3333/smurfs')
      .then(res => {
              //console.log(res.data);
              dispatch({ type: GETTING_SMURFS_SUCCESS, payload: res.data })
              })
                .catch((err) => dispatch({ type: GETTING_SMURFS_FAILURE , payload: err }))
}

export const ADDING_SMURF = 'ADD_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF';
export const ADDING_SMURF_FAILURE = 'ADDING_COMPLETE';

export const addSmurfs = (newSmurf) => (dispatch) => {
  dispatch({ type: ADDING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ADDING_SMURF_FAILURE , payload: err.response.data.Error }))
}