import axios from "axios";

export const GOT_SMURFS = "GOT_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";
export const DELETE_SMURF = "DELETE_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

export const getSmurfs = () => {
  const getSmurfs = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch({type: GETTING_SMURFS, payload: "Getting Smurfs...."});
    getSmurfs
      .then(data => {
        console.log(data);
        dispatch({type: GOT_SMURFS, payload: data.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: "Oh snap some went wrong"});
      })
  }
}

export const addSmurf = smurf => {
  const addSmurf = axios.post("http://localhost:3333/smurfs", smurf);
  return function(dispatch) {

    addSmurf
      .then(data => {
        console.log(data);
        dispatch({type: ADD_SMURF, payload: data.data.pop()})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: "Oh snap some went wrong"});
      })
  }
}

export const editSmurf = smurf => {
  const editSmurf = axios.put("http://localhost:3333/smurfs/" + smurf.id, smurf);
  return function(dispatch) {
    editSmurf
      .then(res => {
        console.log(res);
        dispatch({type: EDIT_SMURF, payload: res.data});
      })
      .catch(err => {
        dispatch({type: ERROR, payload: "Oh snap some went wrong"});
      })
  }
}

export const deleteSmurf = smurf => {
  const deleteSmurf = axios.delete("http://localhost:3333/smurfs/" + smurf.id);
  return function(dispatch) {
    deleteSmurf
      .then(res => {
        console.log(res);
        dispatch({type: DELETE_SMURF, payload: res.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: "Oh snap some went wrong"});
      })
  }
}
