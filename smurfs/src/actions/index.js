/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF';
export const ADD_SMURF_FAILURE = 'ADD_SMURF';
export const DELETE_SMURF = 'ADD_SMURF';
export const DELETE_SMURF_SUCCESS = 'ADD_SMURF';
export const DELETE_SMURF_FAILURE = 'ADD_SMURF';


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

// Synchronous action creators

export const fetchSmurfsSuccess = (smurfs) => {
  return {
    type: FETCH_SMURFS_SUCCESS,
    payload: {
      smurfs,
    },
  };
};

export const fetchSmurfsFailure = (error) => {
  return {
    type: FETCH_SMURFS_FAILURE,
    payload: error,
  };
};

export const addSmurfSuccess = (newSmurfs) => {
  return {
    type: ADD_SMURF_SUCCESS,
    payload: newSmurfs,
  };
};

export const addSmurfFailure = (error) => {
  return {
    type: ADD_SMURF_FAILURE,
    payload: error,
  };
};

export const deleteSmurfSuccess = (newSmurfs) => {
  return {
    type: DELETE_SMURF_SUCCESS,
    payload: newSmurfs,
  };
};

export const deleteSmurfFailure = (error) => {
  return {
    type: DELETE_SMURF_FAILURE,
    payload: error,
  };
};

// Asynchronous action creators

export const fetchSmurfs = () => async (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  try {
    const result = await fetch('http://localhost:3333/smurfs');
    const jsonResult = await result.json();
    dispatch(fetchSmurfsSuccess(jsonResult));
  } catch (error) {
    dispatch(fetchSmurfsFailure(error));
  }
};
