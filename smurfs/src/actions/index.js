import axios from 'axios'

export const SMURF_CALL = 'SMURF_CALL'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAIL = 'SMURF_FAIL'
const url = 'http://localhost:3333/smurfs'

//C
export const add_smurf = smurf => dispatch => {
  dispatch({type: SMURF_CALL})
  return axios
    .post(url, smurf)
    .then(res => {dispatch({type: SMURF_SUCCESS, payload: res.data})})
    .catch(err => {dispatch({type: SMURF_FAIL, payload: err})})
}
//R
export const get_smurf = () => dispatch => {
  dispatch({type: SMURF_CALL})
  return axios
    .get(url)
    .then(res => {dispatch({type: SMURF_SUCCESS, payload: res.data})})
    .catch(err => {dispatch({type: SMURF_FAIL, payload: err})})
}
//U
export const edit_smurf = smurf => dispatch => {
  dispatch({type: SMURF_CALL})
  return axios
    .put(`${url}/${smurf.id}`, smurf)
    .then(res => {dispatch({type: SMURF_SUCCESS, payload: res.data})})
    .catch(err => {dispatch({type: SMURF_FAIL, payload: err})})
}
//D
export const kill_smurf = smurf => dispatch => {
  dispatch({type: SMURF_CALL})
  return axios
    .delete(`${url}/${smurf.id}`)
    .then(res => {dispatch({type: SMURF_SUCCESS, payload: res.data})})
    .catch(err => {dispatch({type: SMURF_FAIL, payload: err})})
}