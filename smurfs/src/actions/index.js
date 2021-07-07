import axios from 'axios';
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";

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
const fetching = () => {
  return {
    type: FETCHING
  }
}
const fetched = (data) => {
  return {
    type: FETCHED,
    payload: data
  }
}
const adding = (data) => {
  return {
    type: ADDING,
    payload: data
  }
}
const added = (data) => {
  return {
    type: ADDED,
    payload: data
  }
}
const error = (err) => {
  return {
    type: ERROR,
    payload: err
  }
}

export const fetchSmurfs = () => {
  const getSmurfs = axios.get("http://localhost:3333/smurfs");
  return function (dispatch) {
    dispatch(fetching());
    getSmurfs
      .then(res => {
        dispatch(fetched(res.data));
      })
      .catch(err => {
        dispatch(error(err));
      })
  }
}

export const addSmurf = (smurf) => {
  const postSmurf = axios.post("http://localhost:3333/smurfs", smurf);
  return function (dispatch) {
    dispatch(adding()),
      postSmurf
      .then(res => {
        dispatch(added(res));
      })
      .catch(err => {
        dispatch(error(err));
      })
  }
}
