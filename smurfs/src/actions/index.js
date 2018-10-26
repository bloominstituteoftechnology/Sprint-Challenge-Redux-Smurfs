import axios from 'axios';

export const ACTIVE_SMURF_HANDLER = 'active_smurf_handler';

export const GET_SMURF = 'get_smurf';
export const GET_SMURF_SUCCESS = 'get_smurf_success';
export const GET_SMURF_FAILURE = 'get_smurf_failure';

export const GET_SMURFS = 'get_smurfs';
export const GET_SMURFS_SUCCESS = 'get_smurfs_success';
export const GET_SMURFS_FAILURE = 'get_smurfs_failure';

export const ADD_SMURF = 'add_smurf';
export const ADD_SMURF_SUCCESS = 'add_smurf_success';
export const ADD_SMURF_FAILURE = 'add_smurf_failure';

export const UPDATE_SMURF = 'update_smurf';
export const UPDATE_SMURF_SUCCESS = 'update_smurf_success';
export const UPDATE_SMURF_FAILURE = 'update_smurf_failure';

export const DELETE_SMURF = 'delete_smurf';
export const DELETE_SMURF_SUCCESS = 'delete_smurf_success';
export const DELETE_SMURF_FAILURE = 'delete_smurf_failure';

const url = 'http://localhost:3333';

export const activeSmurfHandler = (ev) => {
  return {
    type: ACTIVE_SMURF_HANDLER,
    payload: {name: ev.target.name, value: ev.target.value}
  }
}

export const getSmurf = (id) => async dispatch => {
  try {
    dispatch({type: GET_SMURF});
    const res = await axios.get(`${url}/smurfs/${id}`)
    dispatch({type: GET_SMURF_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_SMURF_FAILURE, payload: err})
  }
}

export const getSmurfs = () => async dispatch => {
  try {
    dispatch({type: GET_SMURFS});
    const res = await axios.get(`${url}/smurfs`)
    dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: GET_SMURFS_FAILURE, payload: err})
  }
}

export const addSmurf = (smurf) => async dispatch => {
  try {
    dispatch({type: ADD_SMURF});
    const res = await axios.post(`${url}/smurfs`, smurf)
    dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: ADD_SMURF_FAILURE, payload: err})
  }
}

export const updateSmurf = (smurf) => async dispatch => {
  try {
    dispatch({type: UPDATE_SMURF});
    const res = await axios.put(`${url}/smurfs/${smurf.id}`, smurf)
    dispatch({type: UPDATE_SMURF_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: UPDATE_SMURF_FAILURE, payload: err})
  }
}

export const deleteSmurf = (id) => async dispatch => {
  try {
    dispatch({type: DELETE_SMURF});
    const res = await axios.delete(`${url}/smurfs/${id}`)
    dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data})
  } catch(err) {
    dispatch({type: DELETE_SMURF_FAILURE, payload: err})
  }
}



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
