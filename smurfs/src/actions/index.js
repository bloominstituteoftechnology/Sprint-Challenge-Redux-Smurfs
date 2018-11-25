
import axios from 'axios';

export const FETCHING = "FETCHING";

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetch = () => {
  return dispatch => {
    dispatch({ type: FETCHING});

    axios.get('http://localhost:3333/smurfs')
    .then(({data}) => {
      console.log("data", data);
      dispatch({ type: SUCCESS, payload: data});
    })
    .catch(err => {
      return dispatch({ type: FAILURE, payload:err})
    });
  }
}

