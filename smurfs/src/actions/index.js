import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
// export const ADD_SMURF = 'ADD_SMURF';
// export const ADDED_SMURF = 'ADDED_SMURF';
// export const UPDATING_SMURF = 'UPDATING_SMURF';
// export const UPDATED_SMURF = 'UPDATED_SMURF';
// export const DELETING_SMURF = 'DELETING_SMURF';
// export const DELETED_SMURF = 'DELETED_SMURF';
export const ERRORS = 'ERRORS';

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => {
    return dispatch => {
      dispatch({type: GET_SMURFS});
      axios
        .get(url)
        .then( response => {
          dispatch({type: GOT_SMURFS, payload: response.data})
        })
    }
}