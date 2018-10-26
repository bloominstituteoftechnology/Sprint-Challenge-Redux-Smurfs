/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

export const ADDING = "ADDING";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";

export const DELETING = "DELETING";
export const DELETING_SUCCESS = "DELETING_SUCCESS";
export const DELETING_FAILURE = "DELETING_FAILURE";

export const UPDATING = "UPDATING";
export const UPDATING_SUCCESS = "UPDATING_SUCCESS";
export const UPDATING_FAILURE = "UPDATING_FAILURE";
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
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADDING });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => dispatch({ type: ADDING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADDING_FAILURE, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: DELETING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETING_FAILURE, payload: err }));
};

export const updateSmurf = (friend, id) => dispatch => {
  dispatch({ type: UPDATING });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, friend)
    .then(res => dispatch({ type: UPDATING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATING_FAILURE, payload: err }));
};
