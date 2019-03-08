/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';


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
  if (!smurfs) {
    throw new Error('fetchSmurfsSuccess requires a smurfs result');
  }
  return {
    type: FETCH_SMURFS_SUCCESS,
    payload: {
      smurfs,
    },
  };
};

export const fetchSmurfsFailure = (error) => {
  if (!error) {
    throw new Error('fetchSmurfsFailure requires an error message');
  }
  return {
    type: FETCH_SMURFS_FAILURE,
    payload: {
      error,
    },
  };
};

export const addSmurfSuccess = newSmurfs => ({
  type: ADD_SMURF_SUCCESS,
  payload: {
    newSmurfs,
  },
});

export const addSmurfFailure = (error) => {
  if (!error) {
    throw new Error('addSmurfFailure requires an error message');
  }
  return {
    type: ADD_SMURF_FAILURE,
    payload: {
      error,
    },
  };
};

export const deleteSmurfSuccess = newSmurfs => ({
  type: DELETE_SMURF_SUCCESS,
  payload: {
    newSmurfs,
  },
});

export const deleteSmurfFailure = (error) => {
  if (!error) {
    throw new Error('deleteSmurfFailure requires an error message');
  }
  return {
    type: DELETE_SMURF_FAILURE,
    payload: {
      error,
    },
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

export const addSmurf = (name, age, height) => async (dispatch) => {
  dispatch({ type: ADD_SMURF });
  const smurf = {
    name: String(name),
    age: Number(age),
    height: String(height),
  };
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(smurf),
  };
  try {
    const result = await fetch('http://localhost:3333/smurfs', config);
    const jsonResult = await result.json();
    dispatch(addSmurfSuccess(jsonResult));
  } catch (error) {
    dispatch(addSmurfFailure(error));
  }
};

export const deleteSmurf = id => async (dispatch) => {
  dispatch({ type: DELETE_SMURF });
  const config = {
    method: 'DELETE',
  };
  try {
    const result = await fetch(`http://localhost:3333/smurfs/${id}`, config);
    const jsonResult = await result.json();
    dispatch(deleteSmurfSuccess(jsonResult));
  } catch (error) {
    dispatch(deleteSmurfFailure(error));
  }
};
