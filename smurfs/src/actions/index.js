import axios from 'axios';

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ERROR = "ERROR";
export const BEGIN_EDIT = "BEGIN_EDIT";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const BEGIN_ADD = "BEGIN_ADD";
export const CANCEL_ADD = "CANCEL_ADD";
export const DELETE_SMURF = "DELETE_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

//GET the array from the server, and send it to the reducer as FETCHED_SMURFS
//First uses a FETCHING_SMURFS action to display a loading screen via the FSM
export const fetcher = (url) => {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch({type: FETCHING_SMURFS});
    request.then((data) => {
      dispatch({type: FETCHED_SMURFS, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

//Change the appState back to fetched from edit
export const cancelEdit = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_EDIT});
  }
}

//Change the appState to edit from fetched
export const beginEdit = (index) => {
  return (dispatch) => {
    dispatch({type: BEGIN_EDIT, payload: index});
  }
}

//Change the appState back to fetched from add
export const cancelAdd = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_ADD});
  }
}

//Change the appState to add from fetched
export const beginAdd = () => {
  return (dispatch) => {
    dispatch({type: BEGIN_ADD});
  }
}

//Sends a delete request to the server, changes the appState to fetching, then
//fetched or error when the server responds
export const deleter = (url) => {
  const request = axios.delete(url);
  return (dispatch) => {
    dispatch({type: DELETE_SMURF});
    request.then((data) => {
      dispatch({type: FETCHED_SMURFS, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

//Sends a post request to the server, changes the appState to fetching, then
//fetched or error when the server responds
export const adder = (url, smurf) => {
  const request = axios.post(url, smurf);
  return (dispatch) => {
    dispatch({type: ADD_SMURF});
    request.then((data) => {
      dispatch({type: FETCHED_SMURFS, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

//Sends a put request to the server, changes the appState to fetching, then
//fetched or error when the server responds
export const editor = (url, smurf, id) => {
  const request = axios.put(url + id, smurf);
  return (dispatch) => {
    dispatch({type: EDIT_SMURF});
    request.then((data) => {
      dispatch({type: FETCHED_SMURFS, payload: data.data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};
