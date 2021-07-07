
import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const SMURF_UPDATED = 'SMURF_UPDATED';
// export const DELETING_SMURF = 'DELETING_SMURF';
// export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR = 'ERROR';



export const fetchSmurfs = () => {
  const getSmurfs = axios.get('http://localhost:3333/smurfs');
  return function (dispatch) {
    dispatch({ type: FETCHING_SMURFS, payload: true });
    getSmurfs
      .then(data => {
        console.log(data);
        dispatch({ 
          type: FETCHED_SMURFS, 
          payload: data.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: ERROR, 
          payload: true });
      })
  }
}

export const addSmurf = (smurf) => {
  const postSmurf = axios.post('http://localhost:3333/smurfs', smurf);
  return function (dispatch) {
    dispatch({ type: ADDING_SMURF, payload: true });
    postSmurf
      .then(res => {
        dispatch({ 
          type: ADDED_SMURF,
          payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
          type: ERROR, 
          payload: true });
      })      
  }
}