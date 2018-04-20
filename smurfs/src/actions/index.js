import axios from 'axios';

// Set up action types to be bassed to reducers
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF'
export const DELETING_SMURFS = 'DELETING_SMURFS'
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_ERROR = 'SMURFS_ERROR';

// Set up actions to be exported into App components props
export const getSmurfs = () => { // Grab all smurfs from server
  const promise = axios('http://localhost:3333/smurfs');
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    promise
      .then(response => {
        dispatch({ type: SMURFS_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: SMURFS_ERROR });
      })
  }
}

// Add smurf to server using data from input fields
export const addSmurf = smurf => {
  const promise = axios.post('http://localhost:3333/smurfs', smurf);
  return dispatch => {
    promise
      .then(response => {
        dispatch({ type: ADDING_SMURF });
      })
      .then(response => {
        dispatch(getSmurfs());
      })
      .catch(error => {
        dispatch({
          type: SMURFS_ERROR,
          payload: 'ERROR Adding Smurfs'
        });
      });
  }
}

// Update smurf that already exists on the server
export const updateSmurf = ( id, smurf ) => {
  const promise = axios.put(`http://localhost:3333/smurfs/${id}`, smurf);
  return dispatch => {
    promise
      .then(response => {
        dispatch({ type: UPDATING_SMURF });
      })
      .then(response => {
        dispatch(getSmurfs());
      })
      .catch(error => {
        dispatch({
          type: SMURFS_ERROR,
          payload: 'ERROR Deleting Smurfs'
        });
      });
  }
}

// Delete smurf that lives on the sevrer by referencing id
export const deleteSmurf = id => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    promise
      .then(response => {
        dispatch({ type: DELETING_SMURFS });
      })
      .then(response => {
        dispatch(getSmurfs());
      })
      .catch(error => {
        dispatch({
          type: SMURFS_ERROR,
          payload: 'ERROR Updating Smurfs'
        });
      });
  }
}
