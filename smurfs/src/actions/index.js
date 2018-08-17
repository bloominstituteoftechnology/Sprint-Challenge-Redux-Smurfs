import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';
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
        .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
}

export const addSmurf = (name, age, height) => {
    return dispatch => {
      dispatch({type: ADD_SMURF});
      axios
        .post(url, {
            name: name,
            age: age,
            height: height
        })
        .then ( response => {
          dispatch({type: ADDED_SMURF, payload: response.data})
        })
        .catch (err => {dispatch({type: ERRORS, payload: err})});
    }
}

export const updateSmurf = (name, age, height, id) => {
  return dispatch => {
    dispatch({type: UPDATING_SMURF});
    axios
      .put(`${url}/${id}`, {
        name: name,
        age: age,
        height: height
      })
      .then( response => {
        dispatch({type: UPDATED_SMURF, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERRORS, payload: err})
      })
  }
}

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({type: DELETING_SMURF});
    axios
      .delete(`${url}/${id}`)
      .then( response => {
        dispatch({type: DELETED_SMURF, payload: response.data});
      })
      .catch(err => {
        dispatch({type: ERRORS, payload: err});
      })
  }
}