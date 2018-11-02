import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";
export const DELETING_SMURF = "DELETING_SMURF";
export const DELETED_SMURF = "DELETED_SMURF";
export const DELETE_ERROR = "DELETE_ERROR";


export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addNewSmurf = smurf => dispatch => {
  dispatch({ type: ADDING_SMURF });

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: SMURF_ADDED, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_ERROR, payload: err });
    });
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETING_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: DELETED_SMURF, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: DELETE_ERROR, payload: err.message });
      });
  };
};
