import axios from "axios";

import * as Actions from "./actionTypes";

export { fetchSmurf, addSmurf, deleteSmurf, updateSmurf}

const fetchSmurf = () => {
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: Actions.FETCHING_SMURF });

    smurfs
      .then(response => {
        dispatch({
          type: Actions.SUCCESS_FRIENDS,
          payload: response.data
        });
      })

      .catch(err => {
        dispatch({
          type: Actions.ERROR_SMURFS,
          payload: "ERROR: fetching Smurfs lists"
        });
      });
  };
};

const addSmurf = data => {
  const smurfs = axios.post(`http://localhost:3333/smurfs`, data);
  return dispatch => {
    dispatch({ type: Actions.ADDING_SMURF });
    smurfs
      .then(response => {
        dispatch(fetchSmurf());
      })
      .catch(err => {
        dispatch({
          type: Actions.ERROR_SMURFS,
          payload: "ERROR: Could not add new smurfs."
        });
      });
  };
};

const deleteSmurf = smurfId => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${smurfId}`, smurfId);
  return dispatch => {
    dispatch({ type: Actions.DELETING_SMURF });

    smurfs
      .then(response => {
        dispatch(fetchSmurf());
      })
      .catch(err => {
        dispatch({
          type: Actions.ERROR_SMURFS,
          payload: "ERROR: Deletion failed."
        });
      });
  };
};

const updateSmurf = data => {
  const smurfs = axios.post(`http://localhost:3333/smurfs`, data);
  return dispatch => {
    dispatch({ type: Actions.UPDATING_SMURF });

    smurfs
      .then(response => {
        dispatch({
          type: Actions.SUCCESS_FRIENDS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: Actions.ERROR_SMURFS,
          payload: "ERROR could not add new smurfs."
        });
      });
  };
};

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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
