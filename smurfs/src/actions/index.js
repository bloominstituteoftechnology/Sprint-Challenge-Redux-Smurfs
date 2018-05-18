import axios from 'axios';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCHED = 'SMURFS_FETCHED';
export const ERROR = 'ERROR';
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

export const fetchSmurfs = () => {
  const getSmurfs = axios.get ('http://localhost:3333/smurfs');
  return function(dispatch) {
    dispatch({ type: FETCHING_SMURFS });
    // FETCHING puts in a pending state;
    getSmurfs
      .then(someData => {
        dispatch({ type: SMURFS_FETCHED, payload: someData.data });
        // FETCHED puts in a resolved state;
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
        // ERROR puts in a rejected state;
      });
  };
};

// export const editSmurf = smurf => {
//   const changeSmurf = axios.put(
//     `http://localhost:3333/smurfs/${smurf.id}`,
//     {newSmurf: smurf.name }
//   );
//   return function(dispatch) {
//     dispatch({ type: GET_SMURF });
//     changeSmurf
//       .then(resolve => {
//         dispatch({ type: SMURF_U})
//       })
//   }
// };