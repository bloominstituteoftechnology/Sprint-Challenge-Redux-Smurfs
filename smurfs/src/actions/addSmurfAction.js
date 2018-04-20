import axios from 'axios';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const addSmurfAction = newSmurf => dispatch => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching smurfs' });
    });
};

export default addSmurfAction;