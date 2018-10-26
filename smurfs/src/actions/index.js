import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_FAILURE = "SMURF_FETCH_FAILURE";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

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

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SMURF_FETCH_FAILURE, payload: error });
    });
};

export const addSmurf = (name, age, height) => (dispatch, getState) => {
  const smurfs = getState().smurfs;
  const newID = smurfs[smurfs.length - 1].id + 1;
  console.log(name, age, height);
  axios
    .post("http://localhost:3333/smurfs", {
      id: newID,
      name: name,
      age: age,
      height: height
    })
    .then(() => {
      dispatch({
        type: ADD_SMURF,
        id: newID,
        name: name,
        age: age,
        height: height
      });
    })
    .catch(error => {
      console.dir(error);
    });
};

export const editSmurf = (id, name, age, height) => dispatch => {
  axios
    .put(`http://localhost:3333/smurfs/${id}`, {
      id: id,
      name: name,
      age: age,
      height: height
    })
    .then(response => {
      dispatch({ type: FETCHING_SMURFS, payload: response.data });
    })
    .catch(error => {
      console.dir(error);
    });
};
