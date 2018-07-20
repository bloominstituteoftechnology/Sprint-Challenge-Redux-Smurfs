import axios from 'axios';


export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const ERROR = 'ERROR';


export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data.results });
      })
      .catch(error => 
        dispatch({ type: ERROR, payload: error})
      );
  }
}

export const addNewSmurf = smurf => {
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    axios
      .post('http://localhost:3333/smurfs', smurf)
        .then(({ data }) => {
          dispatch({ type: SMURF_ADDED, payload: data });
        })
        .catch( err => {
          dispatch({ type: ERROR, payload: err })
        });
  }
}