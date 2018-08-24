import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const ERROR_FETCHING = "ERROR_FETCHING";
export const POSTING_SMURF = "POSTING_SMURF";
export const POSTED = "POSTED";
export const ERROR_POSTING = "ERROR_POSTING";

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
  const smurf = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    smurf
      .then(response => {
        dispatch({ type: FETCHED_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING, payload: "Error fetching smurfs" });
      });
  };
};
