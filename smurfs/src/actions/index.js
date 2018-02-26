import axios from "axios/index";

// special actions returing  <== thunk
export function getSmurfData() {
  return dispatch => axios.get('http://localhost:3333/smurfs').then(res => dispatch({
    type: 'GET_SMURFS',
    payload: res.data
  }))
}
