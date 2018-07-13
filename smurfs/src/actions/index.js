import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';

export const ADDING_SMURF = 'ADDING_SMURF';

// export const UPDATING_SMURF = 'UPDATING_SMURF';

// export const DELETING_SMURF = 'DELETING_SMURF';

export const SUCCESS = 'SUCCESS';

export const ERROR = 'ERROR';


export const fetchSmurfs = () => {
  const getSmurfs = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs
    .then(response => {
      console.log(response);
    dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err)
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
      console.log(response);
    dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: ERROR, payload: err });
    });
  };
};

// export const updateSmurfs = (id) => {
//   const putSmurf = axios.put(`http://localhost:3333/smurfs/${id}`);
//   return dispatch => {
//     dispatch({ type: UPDATING_SMURF });
//     putSmurf
//     .then(response => {
//     dispatch({ type: UPDATED_SMURF, payload: response.data })
//     })
//     .catch(err => {
//       dispatch({ type: ERROR, payload: err });
//     });
//   };
// };

// export const deleteSmurf = (id) => {
//   const delSmurf = axios.delete(`http://localhost:3333/smurfs/${id}`);
//   return dispatch => {
//     dispatch({ type: DELETING_SMURF });
//     delSmurf
//     .then(response => {
//     dispatch({ type: DELETED_SMURF, payload: response.data })
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
