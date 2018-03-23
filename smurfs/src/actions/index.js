import axios from 'axios';

export const 
  FETCHING_SMURFS = 'FETCHING_SMURFS',
  SMURFS_FETCHED = 'SMURFS_FETCHED',

  ADDING_SMURF = 'ADDING_SMURF',
  SMURF_ADDED = 'SMURF_ADDED',

  ERROR = 'ERROR';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS })
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ 
        type: SMURFS_FETCHED, 
        smurfs: response.data 
      })
    })
    .catch(error => {
      dispatch({ 
        type: ERROR, 
        errorMessage: 'Error fetching data'
    })
  })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF })
  axios
    .post('http://localhost:3333/smurfs', {...smurf})
    .then(response => {
      dispatch({
        type: SMURF_ADDED,
        smurfs: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        errorMessage: 'Error posting data'
      })
    })
}