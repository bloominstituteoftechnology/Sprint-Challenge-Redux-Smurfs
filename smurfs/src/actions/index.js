import axios from 'axios';


export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';


export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get('http://localhost:3333')
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data.results });
      })
      .catch(error => 
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: 'Error retrieving Smurfs: ', error})
      );
  }
}