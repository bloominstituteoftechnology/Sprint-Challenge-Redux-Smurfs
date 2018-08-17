import axios from "axios";

export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const FETCHING = "FETCHING";
export const FETCHING_POST = "FETCHING_POST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const url = "http://localhost:3333/smurfs";

export const fetchSmurfData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(url)
      .then(response =>
        dispatch({ type: FETCH_SUCCESS, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};

export const addNewSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: FETCHING_POST });
    axios
      .post(url, smurf)
      .then(response =>
        dispatch({ type: ADD_NEW_SMURF, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};
