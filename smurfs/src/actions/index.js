import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const SMURFS_SAVED = "SMURFS_SAVED";
export const SAVING_SMURFS = "SAVING_SMURFS";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const SMURF_UPDATED = "SMURF_UPDATED";
export const DELETING_SMURF = "DELETING_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
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
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        dispatch({ type: SMURFS_FETCHED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: SAVING_SMURFS });
    window.location.reload(
      axios
        .post(`http://localhost:3333/smurfs`, smurf)
        .then(response => {
          dispatch({ type: SMURFS_SAVED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    );
  };
};

export const deleteSmurf = id => {
  return function(dispatch) {
    dispatch({ type: DELETING_SMURF });
    window.location.reload(
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response => {
          dispatch({ type: SMURF_DELETED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    );
  };
};
