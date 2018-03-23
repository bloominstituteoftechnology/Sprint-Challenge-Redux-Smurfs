// axios
import axios from 'axios';
// action types
export const 
  FETCHING_SMURFS         = 'FETCHING_SMURFS',
  FETCHING_SMURFS_ERROR   = 'FETCHING_SMURFS_ERROR',
  FETCHED_SMURFS          = 'FETCHED_SMURFS',
  POSTING_SMURF           = 'POSTING_SMURF',
  POSTING_SMURF_ERROR     = 'POSTING_SMURF_ERROR',
  POSTED_SMURF            = 'POSTED_SMURF',
  DELETING_SMURF          = 'DELETING_SMURF',
  DELETING_SMURF_ERROR    = 'DELETING_SMURF_ERROR',
  DELETED_SMURF           = 'DELETED_SMURF',
  PUTTING_SMURF           = 'PUTTING_SMURF',
  PUTTING_SMURF_ERROR     = 'PUTTING_SMURF_ERROR',
  PUT_SMURF               = 'PUT_SMURF';

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

export const post_smurf = (newSmurf) => dispatch => {
  dispatch({ type: POSTING_SMURF });

  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => {
      console.log(response);
      dispatch({ type: POSTED_SMURF, smurfs: response.data });
    })
    .catch(err => {
      dispatch({ type: POSTING_SMURF_ERROR, errorMessage: 'Error posting new Smurf' });
    });
};

export const delete_smurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      // console.log(response);
      dispatch({ type: DELETED_SMURF, id });
    })
    .catch(err => {
      dispatch({ type: DELETING_SMURF_ERROR, errorMessage: 'Error deleting smurf' });
    });
};

// export const put_smurf
