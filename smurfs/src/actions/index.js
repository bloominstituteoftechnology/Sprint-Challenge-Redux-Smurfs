/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const GOT_SMURFS = "GOT_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => {
  const getSmurfs = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch({type: GETTING_SMURFS, payload: true});
    getSmurfs
      .then(data => {
        console.log(data);
        dispatch({type: GOT_SMURFS, payload: data.data})
      })
      .catch(err => {
        console.log(err);
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
  }
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
