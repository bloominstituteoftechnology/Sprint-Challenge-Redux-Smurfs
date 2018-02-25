import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const ERROR_FETCHING_SMURFS = "ERROR_FETCHING_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const SMURF_ADDED = "SMURF_ADDED";
export const ERROR_ADDING_SMURF = "ERROR_ADDING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
export const ERROR_DELETING_SMURF = "ERROR_DELETING_SMURF";

export const fetchSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(({ data }) => {
        dispatch({ type: SMURFS_FETCHED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_FETCHING_SMURFS, payload: error });
      });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post("http://localhost:3333/smurfs", smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: SMURF_ADDED, payload: data });
      })
      .catch(error => {
        dispatch({ type: ERROR_ADDING_SMURF, payload: error });
      });
  };
};

export const deleteSmurf = id => {
  const targetSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    targetSmurf
      .then(({ data: { SmurfRemoved } }) => {
        console.log("FIND ME!!!!!!!!!!!!! ", SmurfRemoved);
        dispatch({ type: SMURF_DELETED, payload: SmurfRemoved, id: id });
      })
      .catch(error => {
        dispatch({ type: ERROR_DELETING_SMURF, payload: error });
      });
  };
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
