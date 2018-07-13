import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHED_SMURFS = 'FETCHED_SMURFS';


export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';

export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATED_SMURF = 'UPDATED_SMURF';

export const DELETING_SMURF = 'DELETING_SMURF';
export const DELETED_SMURF = 'DELETED_SMURF';


export const ERROR = 'ERROR';


export const fetchSmurfs = () => {
  const smurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
    .then(response => {
    dispatch({ type: FETCHED_SMURFS, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};

export const addSmurf = smurf => {
  const newSmurf = axios.post(`http://localhost:3333/smurfs`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
    .then(response => {
    dispatch({ type: ADDED_SMURF, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
    });
  };
};

// export const updateSmurfs = () => {
//   const smurfs = axios.put(`http://localhost:3333/smurfs`);
//   return dispatch => {
//     dispatch({ type: FETCHING_SMURFS });
//     smurfs
//     .then(response => {
//     dispatch({ type: FETCH_SMURFS, payload: response.data })
//     })
//     .catch(err => {
//       dispatch({ type: ERROR, payload: err });
//     });
//   };
// };

// export const deleteSmurfs = () => {
//   const smurfs = axios.delete(`http://localhost:3333/smurfs`);
//   return dispatch => {
//     dispatch({ type: FETCHING_SMURFS });
//     smurfs
//     .then(response => {
//     dispatch({ type: FETCH_SMURFS, payload: response.data })
//     })
//     .catch(err => {
//       dispatch({ type: ERROR, payload: err });
//     });
//   };
// };
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
