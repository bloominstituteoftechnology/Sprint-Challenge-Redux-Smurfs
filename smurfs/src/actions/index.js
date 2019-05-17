
import axios from 'axios';

export const FETCHING = "FETCHING";

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


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

export const addSmurf = (addedsmurfs) => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
    .post("http://localhost:3333/smurfs",  addedsmurfs)
    .then(response => {
      dispatch({
        type: SUCCESS,
        smurfs: response.data
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