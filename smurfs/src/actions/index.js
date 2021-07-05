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

export const FETCHING_SMURF = 'FETCHING_SMURF';
export const FETCHED_SMURF = 'FETCHED_SMURF';
export const ERROR_SMURF = 'ERROR_SMURF';

export const getSmurf = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => dispatch({ type: FETCHED_SMURF, data: response.data }))
      .catch(err => dispatch({ type: ERROR_SMURF }));
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    setTimeout(() => {
      axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response =>
          dispatch({ type: FETCHED_SMURF, data: response.data })
        )
        .catch(err => dispatch({ type: ERROR_SMURF }));
    });
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: FETCHED_SMURF });
    setTimeout(() => {
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(response =>
          dispatch({ type: FETCHED_SMURF, data: response.data })
        )
        .catch(err => dispatch({ type: ERROR_SMURF }));
    });
  };
};

export const updateSmurf = smurf => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    setTimeout(() => {
      axios
        .delete(`http://localhost:3333/smurfs/${smurf.editId}`, smurf)
        .then(response =>
          dispatch({ type: FETCHED_SMURF, data: response.data })
        )
        .catch(err => dispatch({ type: ERROR_SMURF }));
    });
  };
};
