import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SUCCESS = 'SUCCESS';
const fetchSmurfs = () => {
  const getSmurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => dispatch({type: FETCHING_SMURFS}) 
  getSmurfs
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err);
  })
}