import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

const URL = 'http://localhost:3333/smurfs';

export const fetchSmurfs = () => { // Builds an action type.
  const getSmurfs = axios.get(URL); // Creates an action call.
  return dispatch => { // Makes available the dispatch method.
    dispatch({ type: FETCHING_SMURFS });
    getSmurfs // Calls getSmurfs.
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data }); // Sets on state by dispatching a Success Type with payload of response.data.
      })
      .catch(err => { // Catches error.
        dispatch({ type: ERROR, payload: 'Error fetching Smurfs data.' }); // Sets on state by dispatching an Error Type with payload of error string.
      });
  };
};

export const createSmurf = smurf => { // Takes in a Smurf.
  const addSmurf = axios.post(URL, smurf);
  return dispatch => { // Calls dispatch function.
    dispatch({ type: ADDING_SMURF });
    addSmurf
      .then(response => {
        console.log(response.data);
        dispatch({ type: SUCCESS, payload: response.data }); // Dispatches a Success type.
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error adding Smurf data.' }); // Dispatches an Error type with a payload of a string.
      });
  };
};

// export const editSmurfs = smurf => {
//   const changeSmurfs = axios.put(
//     `http://localhost:3333/smurfs/${smurf.id}`,
//     { newSmurf: smurf.name }
//   );

//   return function(dispatch) {
//     dispatch({ type: EDITING_SMURFS });
//     changeSmurfs
//       .then(resolve => {
//         dispatch({ type: SMURFS_UPDATED, payload: resolve.data });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
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
