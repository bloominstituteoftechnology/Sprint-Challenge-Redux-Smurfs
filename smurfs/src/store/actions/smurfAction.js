import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAIL = "GET_SMURF_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAIL = "DELETE_SMURF_FAIL";

export const UPDATE_SMURF = "UPDATE_SMURF";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAIL = "UPDATE_SMURF_FAIL";

const URL = `http://localhost:3333/smurfs`;

export const getSmurf = () => dispatch => {
  dispatch({
    type: GET_SMURF
  });
  axios
    .get(`${URL}`)
    .then(res =>
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SMURF_FAIL,
        payload: err
      })
    );
};

export const postSmurf = newsmurf => dispatch => {
  dispatch({
    type: GET_SMURF
  });
  axios
    .post(`${URL}`, newsmurf)
    .then(res =>
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SMURF_FAIL,
        payload: err
      })
    );
};

export const removeSmurf = id => dispatch => {
  dispatch({
    type: DELETE_SMURF
  });
  axios
    .delete(`${URL}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_SMURF_FAIL,
        payload: err
      })
    );
};
export const submitUpdated = (id, updated) => dispatch => {
  dispatch({
    type: UPDATE_SMURF
  });
  axios
    .put(`${URL}/${id}`, updated)
    .then(res =>
      dispatch({
        type: UPDATE_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_SMURF_FAIL,
        payload: err
      })
    );
};
