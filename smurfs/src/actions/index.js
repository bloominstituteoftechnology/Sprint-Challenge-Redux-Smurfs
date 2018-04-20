import axios from 'axios';

export const 
  FETCHING    = 'FETCHING',
  FETCHED     = 'FETCHED',
  ERROR       = 'ERROR',
  ADDING      = 'ADDING',
  ADDED       = 'ADDED';

export const getSmurfs = () => dispatch => {

  dispatch({ type: FETCHING });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: FETCHED, smurfs: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Smurfs Not Found'})
    });
};

export const addSmurf = (newSmurf) => dispatch => { 
  dispatch({ type: ADDING });

  axios
    .post(`http://localhost:3333/smurfs`, newSmurf) 
    .then(response => {
      dispatch({ type: ADDED, smurfs: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Smurfs Not Found'})
    })
}