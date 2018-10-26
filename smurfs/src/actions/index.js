/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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


import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING = "ADDING";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";

export const DELETING = "DELETING";
export const DELETING_SUCCESS = "DELETING_SUCCESS";
export const DELETING_FAILURE = "DELETING_FAILURE";

export const fetchSmurfs = () => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({ type: FETCHING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FAILURE, payload: error });
    });
};

export const addSmurf = friend => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: "ADDING" });
  axios
    .post("http://localhost:3333/api/smurfs", friend)
    .then(response => {
      dispatch({ type: ADDING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: ADDING_FAILURE, payload: error });
    });
};

export const deleteSmurf = id => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: "DELETING" });
  axios
    .delete(`http://localhost:3333/api/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETING_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETING_FAILURE, payload: error });
    });
};
