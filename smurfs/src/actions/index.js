import axios from "axios";
const URL = "http://localhost:3333/smurfs";

export const FETCHING = "FETCHING ";
export const FETCHED = "FETCHED ";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const fetchSmurfs = () => {
  const promise = axios.get(URL);
  return dispatch => {
    dispatch({ type: FETCHING });//dispatch ==> a new action

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
  const promise = axios.post(URL, smurf);
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
