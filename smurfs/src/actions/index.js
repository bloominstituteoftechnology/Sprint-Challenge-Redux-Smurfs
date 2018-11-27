
import axios from 'axios';

export const FETCHING = "FETCHING";

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING = "ADDING";

export const fetch = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING});

    axios.get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: SUCCESS, smurfs: response.data});
    })
    .catch(err => {
       dispatch({ type: FAILURE, error: 'Oh no!'})
    });
  }
}

export const addSmurf = (smurf) => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
    .post("http://localhost:3333/smurfs",  smurf)
    .then(response => {
      dispatch({
        type: SUCCESS,
        payload: response.data,
      })
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: "Unable to add new Smurf to your village.",
      })
    })
  }
}