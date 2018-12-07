import axios from 'axios';

export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

const BASE_URL = 'http://localhost:3333/smurfs';

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