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

const host = `http://localhost:3333/smurfs`;

export const getSmurfs = () => dispatch => {
  const smurfs = axios.get(`${host}`);
  dispatch({ type: FETCHING });
  smurfs
    .then(res => {
      dispatch({ type: FETCHED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  const newGuy = axios.post(`${host}`, smurf);
  dispatch({ type: ADDING });
  newGuy
    .then(res => {
      dispatch({ type: ADDED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const updateSmurf = (info, id) => dispatch => {
  const updatedSmurf = axios.put(`${host}/${id}`, info);
  dispatch({ type: UPDATING });
  updatedSmurf
    .then(res => {
      dispatch({ type: UPDATED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const deleteSmurf = id => dispatch => {
  const deleted = axios.delete(`${host}/${id}`);
  dispatch({ type: DELETING });
  deleted
    .then(res => {
      dispatch({ type: DELETED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};
