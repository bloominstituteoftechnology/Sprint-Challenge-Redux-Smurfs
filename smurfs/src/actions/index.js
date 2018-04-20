import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const CREATING = "CREATING";
export const CREATED = "CREATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const fetchSmurfs = smurfs => {
  const promise = axios.get("http://localhost:3334/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(({ data }) => {
        dispatch({ type: FETCHED, payload: data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const createSmurf = smurf => {
  const promise = axios.post("http://localhost:3334/smurfs", smurf);
  return dispatch => {
    dispatch({ type: CREATING });
    promise
      .then(({ data }) => {
        dispatch({ type: CREATED, payload: data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const updateSmurf = smurf => {
  const promise = axios.put(`http://localhost:3334/smurfs${smurf.id}`, smurf);
  return dispatch => {
    dispatch({ type: UPDATING });
    promise
      .then(({ data }) => {
        dispatch({ type: UPDATED, payload: data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteSmurf = smurf => {
  const promise = axios.delete(
    `http://localhost:3334/smurfs${smurf.id}`,
    smurf
  );
  return dispatch => {
    dispatch({ type: DELETING });
    promise
      .then(({ data }) => {
        dispatch({ type: DELETED, payload: data });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ERROR, payload: error });
      });
  };
};
