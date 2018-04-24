import axios from "axios";
import * as SmurfTypes from "./actionTypes";

export const getSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs/");
  return dispatch => {
    dispatch({ type: SmurfTypes.PENDING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        dispatch({
          type: SmurfTypes.SUCCESS_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: SmurfTypes.ERROR_SMURFS,
          payload: "ERROR Fetching Smurfs"
        });
      });
  };
};
