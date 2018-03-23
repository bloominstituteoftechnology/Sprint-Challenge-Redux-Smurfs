import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING});
    axios
      .get('http://localhost:3333/smurfs')
      .then(result => dispatch({type: FETCHED, smurfs: result.data}))
      .catch(err => dispatch({type: ERROR, errorMessage: "Dropped your smurfs!"}));
  }
}

export const addSmurf = smurf => dispatch => {
    console.log(smurf);
    axios
      .post('http://localhost:3333/smurfs', smurf).then(response => {
        dispatch({
          type: ADD_SMURF,
        })
      }).catch(error => console.log(smurf))
}