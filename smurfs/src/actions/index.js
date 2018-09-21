import axios from "axios";

// axios Methods
export const FETCHING = "FETCHING";
export const FETCHING_POST = "FETCHING_POST";
export const FETCHING_MODIFY = "FETCHING_MODIFY";
export const FETCHING_DEL = "FETCHING_DEL";
// axios outcomes
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// case actions for updating state
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const DEL_SMURF = "DEL_SMURF";
export const MODIFY_SMURF = "MODIFY_SMURF";

let URL = "http://localhost:3333/smurfs/";

export const fetchSmurfData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response =>
        dispatch({ type: FETCH_SUCCESS, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};

export const addNewSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: FETCHING_POST });
    axios
      .post(URL, smurf)
      .then(response =>
        dispatch({ type: ADD_NEW_SMURF, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};

export const delSmurf = smurf => {
  return function(dispatch) {
    dispatch({ type: FETCHING_DEL });
    axios
      .delete(`http://localhost:3333/smurfs/${smurf}`)
      .then(response => dispatch({ type: DEL_SMURF, payload: response.data }))
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};

export const modifySmurf = (id, smurfObject) => {
  console.log("FETCHING_MODIFY ID equals ", id);
  console.log("FETCHING_MODIFY smurfObject equals ", smurfObject);
  return function(dispatch) {
    dispatch({ type: FETCHING_MODIFY });
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurfObject)
      .then(response =>
        dispatch({ type: MODIFY_SMURF, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};
