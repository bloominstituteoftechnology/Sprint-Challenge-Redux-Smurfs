import axios from 'axios';

export const getSmurfs = () => dispatch => {
  dispatch({ type: 'FETCH_SMURFS' });

  axios.get('http://localhost:3333/smurfs/')
    .then(({ data }) => {
      dispatch({ type: 'FETCH_SMURFS_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'FETCH_SMURFS_ERROR', payload: err })
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: 'ADD_SMURF' })
  
  axios.post('http://localhost:3333/smurfs/', newSmurf)
    .then(({ data }) => {
      dispatch({ type: 'ADD_SMURF_SUCCESS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'ADD_SMURF_ERROR', payload: err })
    })
};