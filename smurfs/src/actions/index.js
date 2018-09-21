import axios from 'axios';

export const getSmurfs = () => dispatch => {
  dispatch({ type: 'FETCHING_SMURFS' });

  axios.get('http://localhost:3333/smurfs/')
    .then(({ data }) => {
      dispatch({ type: 'FETCHED_SMURFS', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'ERROR_FETCHING_SMURFS', payload: err })
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: 'ADDING_SMURF' })
  
  axios.post('http://localhost:3333/smurfs/', newSmurf)
    .then(({ data }) => {
      dispatch({ type: 'ADDED_SMURF', payload: data });
    })
    .catch(err => {
      dispatch({ type: 'ERROR_ADDING_SMURF', payload: err })
    })
};