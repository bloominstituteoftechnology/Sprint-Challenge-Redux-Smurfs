import axios from 'axios';
import Axios from 'axios';
export const GETTING_SMURF = 'GETTING_SMURF';
export const GETTING_SMURF_SUCCESS = 'GETTING_SMURF_SUCCESS';
export const GETTING_SMURF_FAIL = 'GETTING_SMURF_FAIL';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const ERROR = 'ERROR';
export const DELETING_SMURF = 'DELETEING_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => dispatch => {
  dispatch({ type: GETTING_SMURF });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('RESPONSE FROM GET', response);
      dispatch({ type: GETTING_SMURF_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GETTING_SMURF_FAIL, payload: error });
    });
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });

  Axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log('PUSH RESPONSE', response);
      dispatch({ type: ADD_SMURF, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error })
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING_SMURF });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log('DELETE', response);
      dispatch({ type: DELETE_SMURF, payload: response.data })
    })
    .catch(error => {
      dispatch({ type: ERROR, payload: error })
    })
};