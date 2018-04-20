import axios from 'axios';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

const getSmurfsAction = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR, error: 'Could not fetch data' });
    });
};

export default getSmurfsAction;
