import axios from 'axios';
export const RETRIEVING_SMURF = 'RETRIEVING_SMURF';
export const SMURF_RETRIEVED = 'SMURF_RETRIEVED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const SMURF_ADDED = 'SMURF_ADDED';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const SMURF_UPDATED = 'SMURF_UPDATED';
export const DELETING_SMURF = 'DELETING_SMURF';
export const SMURF_DELETED = 'SMURF_DELETED';
export const ERROR = 'ERROR';

const smurlURL = 'http://localhost:3333/smurfs';

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${smurlURL}/create`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({data}) => {
        dispatch({ type: SMURF_ADDED, payload: data});
      })
      .catch(error => {
        dispatch({type: ERROR, payload: error});
      });
  };
};

export const retrieveSmurf = () => {
  const getSmurfs = axios.get(`${smurlURL}/get`);
  
  return dispatch => { 
    dispatch({ type: RETRIEVING_SMURF });
  getSmurfs
    .then(response => {
      console.log("Get Smurf Data Recieved", response);
      dispatchEvent({ type: SMURF_RETRIEVED, payload: response });
    })
    .catch(error => {
      dispatchEvent({ type: ERROR, payload: error })
    });
  };
};

export const updateSmurf = () => {

}
export const deleteSmurf = () => {

}
