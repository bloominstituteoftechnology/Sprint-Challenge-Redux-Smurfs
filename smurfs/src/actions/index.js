import axios from "axios";
const URL = "http://localhost:3333/smurfs";

//Action types:
export const FETCHING = "FETCHING_SMURFS";
export const FETCHED = "FETCHED_SMURFS_SUCCESS";
export const ERROR = "SMURFS_ERROR";
export const ADDING = "ADDING_SMURF";
export const ADDED = "ADDED_SMURF";
export const DELETING = "DELETING_SMURF";
export const DELETED = "DELETED_SMURF";

//Action creator
export const getSmurfsData = () => {
  return dispatch => {
    console.log("fetching");
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => dispatch({ type: FETCHED, payload: response.data }))
      .catch(err => dispatch({ type: ERROR }));
  };
};

export const addNewSmurf = smurf => {
  const newSmurfPromise = axios.post(URL, smurf);
  return dispatch => {
    dispatch({ type: ADDING });
    newSmurfPromise
      .then(({ data }) => {
        dispatch({ type: ADDED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteSmurf = id => {
  const deleteSmurfPromise = axios.delete(`${URL}/${id}`);
  return dispatch => {
    dispatch({ type: DELETING });
    deleteSmurfPromise
      .then(({ data }) => {
        dispatch({ type: DELETED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
