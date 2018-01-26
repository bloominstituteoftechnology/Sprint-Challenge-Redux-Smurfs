import axios from 'axios';

export const SMURFS_FETCHING = 'SMURFS_FETCHING';
export const SMURFS_FETCHING_SUCCESS = 'SMURFS_FETCHING_SUCCESS';
export const SMURFS_FETCHING_ERROR = 'SMURFS_FETCHING_ERROR';

export const SMURF_ADDING = 'SMURF_ADDING';
export const SMURF_ADDING_SUCCESS = 'SMURF_ADDING_SUCCESS';
export const SMURF_ADDING_ERROR = 'SMURF_ADDING_ERROR';

export const SMURFS_EDITING = 'SMURFS_EDITING';
export const SMURFS_EDITING_SUCCESS = 'SMURFS_EDITING_SUCCESS';
export const SMURFS_EDITING_ERROR = 'SMURFS_EDITING_ERROR';

export const SMURFS_DELETING = 'SMURFS_DELETING';
export const SMURFS_DELETING_SUCCESS = 'SMURFS_DELETING_SUCCESS';
export const SMURFS_DELETING_ERROR = 'SMURFS_DELETING_ERROR';

const ADDRESS = 'http://localhost:3333';

export const getSmurfs = _ => {
  const smurfAPiCall = axios.get(`${ADDRESS}/smurfs`);

  return dispatch => {
    dispatch({ type: SMURFS_FETCHING });
    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({ type: SMURFS_FETCHING_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: SMURFS_FETCHING_ERROR, payload: err });
        });
    }, 1000);
  };
};

export const addSmurf = smurf => {
  const smurfAPiCall = axios.post(`${ADDRESS}/smurfs`, smurf);

  return dispatch => {
    dispatch({ type: SMURF_ADDING });
    setTimeout(_ => {
      smurfAPiCall
        .then(({ data }) => {
          dispatch({ type: SMURF_ADDING_SUCCESS, payload: data });
        })
        .catch(err => {
          dispatch({ type: SMURF_ADDING_ERROR, payload: err });
        });
    }, 1000);
  };
};
