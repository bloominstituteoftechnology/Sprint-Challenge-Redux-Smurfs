import axios from "axios";

export const ADDED = "ADDED";
export const ADDING = "ADDING";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const UPDATED = "UPDATE";
export const UPDATING = "UPDATING";
export const DELETED = "DELETE";
export const DELETING = "DELETING";
export const ERROR = "ERROR";

const host = `http://localhost:3333`;

export const getSmurfs = () => dispatch => {
  const smurfs = axios.get(`${host}/smurfs`);
  dispatch({ type: FETCHING });
  smurfs
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCHED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  const newGuy = axios.post(`${host}/smurfs`, smurf);
  dispatch({ type: ADDING });
  newGuy
    .then(res => {
      console.log(res);
      dispatch({ type: ADDED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
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
