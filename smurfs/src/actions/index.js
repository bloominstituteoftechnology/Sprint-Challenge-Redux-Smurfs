// ACTIONS -------------------- ACTIONS
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURFS});

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
        dispatch({
          type: FETCHING_SMURFS_SUCCESS,
          payload: response.data
        });
      }
    )
    .catch(error => {
        dispatch({
          type: FETCHING_SMURFS_FAILURE,
          payload: error
        });
    })
}

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';

export const addSmurf = smurf => dispatch => {
  console.log('smurf', smurf);
  dispatch({
    type: ADDING_SMURF,
  });

  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
        dispatch({
          type: ADDING_SMURF_SUCCESS,
          payload: response.data
        });
      }
    )
    .catch(error => {
      console.dir(error);
        dispatch({
          type: ADDING_SMURF_FAILURE,
          payload: error
        });
    })
}

