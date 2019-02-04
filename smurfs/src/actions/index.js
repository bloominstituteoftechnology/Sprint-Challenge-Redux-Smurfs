import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_START = "ADD_START";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FAILURE, payload: err });
    });
};

export const updateSmurf = (data, idx) => dispatch => {
  dispatch({ type: UPDATE_START });
  axios
    .put(`http://localhost:3333/smurfs/${idx}`, data)
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_FAILURE, payload: err });
    });
};

export const deleteSmurf = idx => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`http://localhost:3333/smurfs/${idx}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err });
    });
};
