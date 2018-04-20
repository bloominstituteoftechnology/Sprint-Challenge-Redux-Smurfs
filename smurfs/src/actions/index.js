import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ADDING_SMURFS = "ADDING_SMURFS";
export const DELETING_SMURFS = "DELETING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ERROR = "ERROR";

export const getSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        dispatch({ type: FETCHED_SMURFS, payload: response.data });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR, payload: "Error fetching smurfs" });
      });
  };
};

export const createSmurfs = smurf => {
  // a smurf has the form {name: "", age: "", height: "", id: num }
  const smurfs = axios.post(`http://localhost:3333/smurfs`, smurf);
  return dispatch => {
    smurfs
      .then(response => {
        dispatch({ type: ADDING_SMURFS });
        dispatch(getSmurfs());
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ERROR,
          payload: "Error fetching smurfs after posting"
        });
      });
  };
};

export const deleteSmurfs = id => {
  const smurfs = axios.delete(`http://localhost:3333/smurfs/${id}`);
  return dispatch => {
    smurfs
      .then(response => {
        dispatch({ type: DELETING_SMURFS });
        dispatch(getSmurfs());
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ERROR,
          payload: "Error fetching smurfs after posting"
        });
      });
  };
};
