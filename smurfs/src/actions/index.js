import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const DATA_REQUESTED = "DATA_REQUESTED";
export const ERROR_OCCOURED = "ERROR_OCCOURED";

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

export const fetchSmurfs = URL => {
  const promise = axios.get(URL);
  return function(dispatch) {
    dispatch({ type: DATA_REQUESTED });
    promise
      .then(response => {
        console.log(response.data);
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        console.log("READ ERROR ", err);
        dispatch({
          type: ERROR_OCCOURED,
          payload: "ERROR RETRIEVING SMURFS..."
        });
      });
  };
};

export const addSmurf = (URL, newSmurf) => {
  const promise = axios.post(URL, newSmurf);
  return function(dispatch) {
    dispatch({ type: DATA_REQUESTED });
    promise
      .then(response => {
        console.log(response.data);
        dispatch({ type: ADD_SMURF, payload: response.data });
      })
      .catch(err => {
        console.log("CREATE ERROR ", err);
        dispatch({
          type: ERROR_OCCOURED,
          payload: "ERROR CREATING SMURF"
        });
      });
  };
};
