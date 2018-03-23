// axios
import axios from 'axios';
// action types
  export const FETCHING_SMURFS = 'FETCHING_SMURFS';
  export const FETCHING_SMURFS_ERROR = 'FETCHING_SMURFS_ERROR';
  export const FETCHED_SMURFS = 'FETCHED_SMURFS';
  export const POSTING_SMURF = 'POSTING_SMURF';
  export const POSTING_SMURF_ERROR = 'POSTING_SMURF_ERROR';
  export const POSTED_SMURF = 'POSTED_SMURF';
  export const DELETING_SMURF = 'DELETING_SMURF';
  export const DELETING_SMURF_ERROR = 'DELETING_SMURF_ERROR';
  export const DELETED_SMURF = 'DELETED_SMURF';
  export const PUTTING_SMURF = 'PUTTING_SMURF';
  export const PUTTING_SMURF_ERROR = 'PUTTING_SMURF_ERROR';
  export const PUT_SMURF = 'PUT_SMURF'; // !! there is a better way to do this

export const fetch_smurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCHED_SMURFS, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_SMURFS_ERROR, errorMessage: 'Error fetching smurfs' });
    });
};

// export const post_smurf

// export const delete_smurf

// export const put_smurf
