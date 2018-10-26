import axios from "axios";

const server = `http://localhost:3333/smurfs`;

export const fetchingSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(server)
    .then(response => {
      dispatch({
        type: FETCHING_SMURFS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_SMURFS_FAILURE,
        payload: error
      });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(server, smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      });
    });
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`${server}/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: error
      });
    });
};

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
