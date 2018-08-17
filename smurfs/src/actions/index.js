import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ERROR = 'ERROR';


const URL = `http://localhost:3333/smurfs`;

export const getSmurfs = () => {
  const promise = axios.get(URL);
  return (dispatch) => {
    dispatch({type: FETCHING_SMURFS})
    promise
      .then((res)=>{
        dispatch({
          type:FETCHED_SMURFS,
          payload: res.data,
        })
      })
      .catch(err => ({type: ERROR}));
  }
}

export const addSmurf = (smurf) => {
  let nuGuy = { name: smurf.name, age: smurf.age, height: smurf.height };
  const promise = axios.post(URL + `/${nuGuy}`);
  return (dispatch) => {
    dispatch({ type: ADDING_SMURF })
    promise
      .then((res) => {
        dispatch({
          type: ADDED_SMURF,
          payload: res.data,
        })
      })
      .catch(err => ({ type: ERROR }));
  }
}
