import axios from "axios";

export const PENDING_SMURFS = "PENDING_SMURFS";
export const SUCCESS_SMURFS = "SUCCESS_SMURFS";
export const ERROR_SMURFS = "ERROR_SMURFS";

export const getTheData = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SMURFS, payload: "Error fetching smurfs" });
      });
  };
};

export const postTheData = data => {
  const smurfs = axios.post("http://localhost:3333/smurfs", data);
  return dispatch => {
    dispatch({ type: PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_SMURFS, payload: "Error posting smurfs" });
      });
  };
};
