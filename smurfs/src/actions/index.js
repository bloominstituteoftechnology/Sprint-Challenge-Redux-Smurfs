import axios from 'axios'; // import axios package

export const FETCHING_SMURF = 'FETCHING_SMURF'; // declare action type variables and export
export const FETCHED_SMURF  = 'FETCHED_SMURF';
export const ERROR_FETCHING_SMURF = 'ERROR_FETCHING_SMURF';

export const CREATING_SMURF = 'CREATING_SMURF';
export const SMURF_CREATED = 'SMURF_CREATED';
export const ERROR_CREATING_SMURF = 'ERROR_CREATING_SMURF';

export const DELETING_SMURF = 'DELETING_SMURF'
export const SMURF_DELETED = 'SMURF_DELETED'
export const ERROR_DELETING_SMURF = 'ERROR_DELETING_SMURF'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURF });

    axios
        .get('http://localhost:3333/smurfs')
        .then(({data}) => {
            dispatch({ type: FETCHED_SMURF, smurfs: data})
        })
        .catch(error => {
            dispatch({ type: ERROR_FETCHING_SMURF, errorMessage: 'Error fetching smurfs'})
        });

};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: CREATING_SMURF });

  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({ type: SMURF_CREATED, smurfs: response.data });
    })
    .catch(error => {
      dispatch({ type: ERROR_CREATING_SMURF, error: 'Error creating friend' });
    });
};

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF});

  axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
          dispatch({ type: SMURF_DELETED, smurfs: response.data})
      })
      .catch(err => {
          dispatch({ type: ERROR_DELETING_SMURF, errorMessage: 'Error deleting friend' })
      });
};