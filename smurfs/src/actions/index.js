import axios from 'axios';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios
      .get('http://localhost:3333/smurfs')
      .then(result => dispatch({ type: FETCHED_SMURF, smurfs: result.data }))
      .catch(err =>
      dispatch({ type: ERROR, errorMessage: 'SMURF ERROR!' })
      );
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    axios 
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({
          type: ADD_SMURF
        });
      })
      .catch(error => console.log(smurf));
  }
}
