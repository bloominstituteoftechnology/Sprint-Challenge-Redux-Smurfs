import axios from 'axios';

export const SMURF_FETCHING = 'SMURF_FETCHING';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const SMURF_FAILURE = 'SMURF_FAILURE';
export const ADD_SMURF_FETCHING = 'ADD_SMURF_FETCHING';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response);
      dispatch({ type: SMURF_SUCCESS, payload: response.data})
    })
    .catch(err => dispatch({ type: SMURF_FAILURE, payload: err }));
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_FETCHING });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      console.log(response);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      console.log(response)
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
};