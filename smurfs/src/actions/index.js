// import axios
import axios from 'axios'

// export types
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const CREATING = "CREATING";
export const CREATED = "CREATED";
export const ERROR = "ERROR";

// fetchSmurfs GET
export const fetchSmurfs = smurfs => {
  const promise = axios.get("http://localhost:3333/smurfs/");
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

// createSmurf POST
export const createSmurf = smurf => {
  const promise = axios.post("http://localhost:3333/smurfs/", smurf);
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