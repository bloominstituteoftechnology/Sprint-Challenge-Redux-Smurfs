import axios from "axios";

export const FETCHING = "FETCHING ";
export const FETCHED = "FETCHED ";
export const ERROR = "ERROR";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ADDING = "ADDING";

export const fetchSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING });

    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: "Error occured while fetching" });
      });
  };
};

export const addSmurfs = smurf => {
  const promise = axios.post("http://localhost:3333/smurfs", smurf);
  return dispatch => {
    dispatch({ type: ADDING });

    promise
      .then(response => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Error occured while adding new smurf"
        });
      });
  };
};

export const removeSmurfs = smurf => {
  const promise = axios.delete(`http://localhost:3333/smurfs/${smurf}`);
  return dispatch => {
    dispatch({ type: DELETING });
    promise
      .then(reponse => {
        dispatch(fetchSmurfs());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
