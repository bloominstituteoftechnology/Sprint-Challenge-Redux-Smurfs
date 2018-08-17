import axios from "axios";

export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

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
  // console.log("addnewSmurf", smurf);
  // return {
  //   type: ADD_NEW_SMURF,
  //   payload: smurf
  // };
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .post(url, smurf)
      .then(response => dispatch({ type: ADD_NEW_SMURF, payload: smurf }))
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};
