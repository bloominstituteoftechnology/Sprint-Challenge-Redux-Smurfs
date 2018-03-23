import axios from 'axios';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const deleteSmurfAction = smurf => dispatch => {
  axios
    .delete('http://localhost:3333/smurfs/:id', smurf)
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching smurfs' });
    });
};

export default deleteSmurfAction;
