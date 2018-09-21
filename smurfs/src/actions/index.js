import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURF_FETCHED = 'SMURF_FETCHED';
export const FETCHING_ERROR = 'FETCHING_ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
   axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: SMURF_FETCHED, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FETCHING_ERROR })
    });
}

export const addSmurf = smurf => dispatch => {
  dispatch ({ type: ADDING_SMURF });
   axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SMURF_ADDED, payload: response.data})
    })
    .catch(err => {
      dispatch({ type: FETCHING_ERROR, payload: err })
    });
}
