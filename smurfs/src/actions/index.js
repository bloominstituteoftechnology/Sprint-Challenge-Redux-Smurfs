import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING});
    axios.get('http://localhost:3333/smurfs/')
    .then(response => {
      dispatch({type: SUCCESS, payload: response.data});
    })
    .catch(() => {
      dispatch({type: FAILURE, payload: 'Error getting smurf data!'});
    })
  }
}

export const addSmurf = smurfObj => {
  return dispatch => {
    dispatch({type: ADD_SMURF});
    axios.post('http://localhost:3333/smurfs/', smurfObj)
    .then(response => {
      dispatch({type: SUCCESS, payload: response.data});
    })
    .catch(() => {
      dispatch({type: FAILURE, payload: 'Error posting smurf data!'});
    })
  }
}

export const deleteSmurf = smurfId => {
  return dispatch => {
    dispatch({type: DELETE_SMURF});
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      dispatch({type: SUCCESS, payload: response.data});
    })
    .catch(() => {
      dispatch({type: FAILURE, payload: `Error deleting smurf data! ID: ${smurfId}`});
    })
  }
}

export const updateSmurf = smurfId => {
  return dispatch => {
    dispatch({type: UPDATE_SMURF});
    axios.put(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      dispatch({type: SUCCESS, payload: response.data});
    })
    .catch(() => {
      dispatch({type: FAILURE, payload: `Error updating smurf data! ID: ${smurfId}`});
    })
  }
}
