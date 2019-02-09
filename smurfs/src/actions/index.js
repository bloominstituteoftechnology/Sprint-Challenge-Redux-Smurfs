import axios from 'axios';

/*
  actions types
*/
export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const PUT_REQUEST = 'PUT_REQUEST';
export const PUT_SUCCESS = 'PUT_SUCCESS';
export const PUT_FAILURE = 'PUT_FAILURE';

export const SELECT_SMURF = 'SELECT_SMURF';

/*
  base url to Smurf API
*/
const BASE_URL = 'http://localhost:3333/smurfs';

/*
  actions creators
*/
export const fetchSmurfs = () => (dispatch) => {
  dispatch ({type: GET_REQUEST});

  axios
    .get(BASE_URL)
    .then( res => {
      dispatch({ type: GET_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: GET_FAILURE, payload: err })
    })
}

export const addSmurf = (smurf) => (dispatch) => {
  dispatch ({type: POST_REQUEST});

  axios
    .post(BASE_URL, smurf)
    .then( res => {
      dispatch({ type: POST_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: POST_FAILURE, payload: err })
    })
}

export const deleteSmurf = (id) => (dispatch) => {
  dispatch ({type: DELETE_REQUEST});

  axios
    .delete(BASE_URL + `/${id}`, id)
    .then( res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: DELETE_FAILURE, payload: err })
    })
}

export const updateSmurf = (smurf,id) => (dispatch) => {
  dispatch ({type: PUT_REQUEST});

  axios
    .put(BASE_URL + `/${id}`, smurf)
    .then( res => {
      dispatch({ type: PUT_SUCCESS, payload: res.data })
    })
    .catch( err => {
      dispatch({ type: PUT_FAILURE, payload: err })
    })
}

export const selectSmurf = (id) => ({
  type: SELECT_SMURF,
  payload: {
    id: id,
  }
})