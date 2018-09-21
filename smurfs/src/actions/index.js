import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETECHED = 'SMURFS_FETECHED';
export const SAVING_SMURF = 'SAVING_SMURF';
export const SMURF_SAVED = 'SMURF_SAVED';
// export const UPDATING_FRIEND = 'UPDATING_FRIEND';
// export const FRIEND_UPDATED = 'FRIEND_UPDATED';
// export const DELETING_FRIEND = 'DELETING_FRIEND';
// export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

export const fetchSmurfs = () => {
  return dispatch => {
      dispatch({ type: FETCHING_SMURFS });
      // console.log(this.props);
      axios.get('http://localhost:3333/smurfs')
          .then(response => { dispatch({  type: SMURFS_FETECHED,
                                          payload: response.data})})
          .catch( err => dispatch({type: ERROR, error: err}));
  };
};

export const saveSmurf = (smurf) => {
  // console.log(smurfs);
  return dispatch => {
      dispatch({ type: SAVING_SMURF });
      axios.post('http://localhost:3333/smurfs',
                  smurf)
          .then(response => { dispatch({  type: SMURF_SAVED,
                                          payload: response.data.smurf})})
          .catch( err => dispatch({type: ERROR, error: err}));
      
      //     axios
      // .post('http://localhost:3333/smurfs')
      //   .then(response => {
      //     this.setState({ smurfs: response.data });
      //   })
      //   .catch(err => console.log(err));

  };
};