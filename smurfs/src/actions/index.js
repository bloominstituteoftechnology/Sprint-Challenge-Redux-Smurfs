import axios from 'axios'

 
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAIL = "ADD_SMURFS_FAIL";

export const DEL_SMURFS_START = "DEL_SMURFS_START";
export const DEL_SMURFS_SUCCESS = "DEL_SMURFS_SUCCESS";
export const DEL_SMURFS_FAIL = "DEL_SMURFS_FAIL";



export const fetchSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURFS_START});

  axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: FETCH_SMURFS_SUCCESS, payload: res}))
    .catch(err => dispatch({type: FETCH_SMURFS_FAIL, payload: err}) );
}


export const addSmurf = smurf => dispatch => {
  dispatch({type: ADD_SMURFS_START});

  axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({type: ADD_SMURFS_SUCCESS, payload: res}))
    .catch(err => dispatch({type: ADD_SMURFS_FAIL, payload: err}) );
}



export const deleteSmurf = id => dispatch => {
  dispatch({type: DEL_SMURFS_START});

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({type: DEL_SMURFS_SUCCESS, payload: res}))
    .catch(err => dispatch({type: DEL_SMURFS_FAIL, payload: err}) );
}


