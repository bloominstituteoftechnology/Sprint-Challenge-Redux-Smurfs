import axios from "axios";

import { ERROR_SMURFS } from "./actionTypes";
import { fetchSmurfs } from "./fetchSmurfs";

export const createSmurf = data => {
  console.log(data);
  const smurfs = axios.post("http://localhost:3333/smurfs/", data);
  return dispatch => {
    smurfs
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({
          type: ERROR_SMURFS,
          payload: "ERROR Posting smurfs"
        });
      });
  };
};
