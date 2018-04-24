import axios from "axios";

import { ERROR_SMURFS } from "./actionTypes";
import { getSmurfs } from "./getSmurfs";

export const addSmurf = data => {
  console.log(data);
  const smurfs = axios.post("http://localhost:3333/smurfs/", data);
  return dispatch => {
    smurfs
      .then(response => {
        dispatch(getSmurfs());
      })
      .catch(err => {
        dispatch({
          type: ERROR_SMURFS,
          payload: "ERROR Posting smurfs"
        });
      });
  };
};
