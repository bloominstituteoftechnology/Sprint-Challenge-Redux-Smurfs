import axios from 'axios';

export const GET_SMURFS = "GET_SMURFS";
export const ERROR = "ERROR";
export const ADDING_SMURF = "ADDING_SMURF";

// ~ GET
export const getSmurfs = URL => {
  return function(dispatch) {
    dispatch({ type: GET_SMURFS });
    axios
      .get(URL)
      .then(({ date }) => {
        dispatch({ type: GET_SMURFS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      });
  };
};

// ~ POST
export const addSmurf = smurf => {
  return function(dispatch) {
    dispatch({type: ADDING_SMURF})
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(({ data }) => {
        dispatch({ type: GET_SMURFS, payload: data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
