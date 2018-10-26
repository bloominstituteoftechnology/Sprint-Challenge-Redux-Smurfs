import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FINISHED = "FETCH_FINISHED";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
const url = "http://localhost:3333/smurfs";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
      dispatch({ type: FETCH_FINISHED });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const createSmurf = smurf => dispatch => {
  axios
    .post(url, smurf)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, payload: err });
    });
};

export const updateSmurf = id => dispatch => {
  axios
    .put(`{url}/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_SMURF_SUCCESS, payload: id }); //maybe id isn't the right thing?
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_SMURF_FAILURE, payload: err });
    });
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`{url}/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err });
    });
};

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
