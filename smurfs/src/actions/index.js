import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const fetchSmurf = () => dispatch => {
  dispatch({ type: FETCHING_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCHING_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: FETCHING_SMURF_FAILURE,
        payload: error
      })
    );
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: error
      })
    );
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START })
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(response => {
    dispatch({
      type: DELETE_SMURF_SUCCESS,
      payload: response.data
    });
  })
  .catch(error =>
    dispatch({
      type: DELETE_SMURF_FAILURE,
      payload: error
    })
  );
}
