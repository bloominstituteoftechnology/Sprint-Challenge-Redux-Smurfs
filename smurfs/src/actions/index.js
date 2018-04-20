import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';
export const ERROR_FETCHING_SMURFS = 'ERROR_FETCHING_SMURFS';

export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATED_SMURF = 'CREATED_SMURF';
export const ERROR_CREATING_SMURF = 'ERROR_CREATING_SMURF';

export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
export const ERROR_DELETING_SMURF = 'ERROR_DELETING_SMURF';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED_SMURFS, smurfs: response.data });
    })
    .catch(error => {
      dispatch({
        type: ERROR_FETCHING_SMURFS,
        error: 'Error fetching smurfs'
      });
    });
};

export const postSmurf = data => dispatch => {
  dispatch({ type: CREATING_SMURF });

  axios
    .post('http://localhost:3333/smurfs', data)
    .then(response => {
      dispatch({ type: CREATED_SMURF, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR_CREATING_SMURF, error: 'Error creating smurf' });
    });
};

export const deleteSmurf = data => dispatch => {
  dispatch({ type: DELETING_SMURF });

  axios
    .delete(`http://localhost:3333/smurfs/${data.id}`)
    .then(response => {
      // dispatch({ type: DELETED_SMURF, smurfs: response.data });
      getSmurfs()(dispatch);
    })
    .catch(error => {
      dispatch({ type: ERROR_DELETING_SMURF, error: 'Error deleting smurf' });
    });
};
