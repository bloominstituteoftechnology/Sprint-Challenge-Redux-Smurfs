import axios from 'axios';

export const FETCHING_SMURFS = "FETCH_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ERROR = "ERROR";

export default () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED_SMURFS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: "We ran into a problem fetching your data!" })
      })
  }
}