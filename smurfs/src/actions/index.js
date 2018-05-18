import axios from "axios";
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const ADDING_SMURF = "ADDING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const ERROR = "ERROR";

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

export const fetchingSmurfs = () => {
  return {
    type: FETCHING_SMURFS
  };
};

export const smurfsFetched = data => {
  return {
    type: SMURFS_FETCHED,
    payload: data
  };
};

export const addingSmurfs = () => {
  return {
    type: ADDING_SMURF
  };
};

export const deletingSmurf = () => {
  return {
    type: DELETING_SMURF
  };
};

export const deleteSmurf = id => {
  return {
    type: DELETE_SMURF,
    payload: id
  };
};

export const error = data => {
  return {
    type: ERROR,
    payload: data
  };
};

export const getSmurfs = () => {
  const fetchDaSmurfs = axios.get("http://localhost:3333/smurfs");
  return function(dispatch) {
    dispatch(fetchingSmurfs());
    fetchDaSmurfs
      .then(response => dispatch(smurfsFetched(response.data)))
      .catch(err => dispatch(error(error)));
  };
};

export const addSmurf = obj => {
  const postSmurf = axios.post("http://localhost:3333/smurfs", obj);
  return function(dispatch) {
    dispatch(addingSmurfs());
    postSmurf
      .then(response => dispatch(smurfsFetched(response.data)))
      .catch(err => dispatch(error(error)));
  };
};

export const removeSmurf = id => {
  const deleteDaSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return function(dispatch) {
    dispatch(deletingSmurf());
    deleteDaSmurf
      .then(response => dispatch(deleteSmurf(response.data)))
      .catch(err => dispatch(error(error)));
  };
};
