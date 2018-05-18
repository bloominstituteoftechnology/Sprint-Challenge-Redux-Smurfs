/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

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

export const cancelEdit = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_EDIT});
  }
}

export const beginEdit = (index) => {
  return (dispatch) => {
    dispatch({type: BEGIN_EDIT, payload: index});
  }
}

export const cancelAdd = () => {
  return (dispatch) => {
    dispatch({type: CANCEL_ADD});
  }
}

export const beginAdd = () => {
  return (dispatch) => {
    dispatch({type: BEGIN_ADD});
  }
}

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
