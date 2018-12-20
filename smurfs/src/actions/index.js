import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const GET_SMURFS = "GET_SMURFS";
export const GETTING_SMURFS = "GETTING_SMURFS";
export const CREATE_SMURF = "CREATE_SMURF";
export const CREATING_SMURF = "CREATING_SMURF";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const ERROR = "ERROR";

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

const URL = "http://localhost:3333/smurfs";

export const getSmurfs = () => {
  console.log("hey");
  const friends = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    friends
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createSmurf = smurf => {
  const newSmurf = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: CREATE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// export const deleteSmurf = id => {
//   const deletedSmurf = axios.delete(`${URL}/${id}`)
//   return dispatch => {
//     dispatch({ type: DELETING_SMURF });
//     deletedSmurf
//       .then(({ data }) => {
//         dispatch({ type: DELETE_SMURF, payload: data });
//         dispatch({ type: SINGLE_SMURF, payload: {} });
//       })
//       .catch(err => {
//         dispatch({ type: ERROR, payload: err });
//       });
//   };
// };


// axios
//   .post("http://localhost:3333/smurfs", { someData: response.data })
//   .then(response => {
//     dispatch({ type: GET_SMURFS, payload: response.data });
//   })
//   .catch(err => {
//     dispatch({ type: ERROR, payload: err });
//   });
