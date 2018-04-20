import axios from "axios";

export const FETCHING = "FETCHING ";
export const FETCHED = "FETCHED ";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";

export const fetchSmurfs = () => {
  const promise = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING });

    promise
      .then(response => {
        console.log('from action promise --> response', response)
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
        dispatch({ type: ADDED, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: "Error occured while adding new smurf"
        });
      });
  };
};
