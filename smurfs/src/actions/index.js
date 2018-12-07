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