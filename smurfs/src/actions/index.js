import axios from 'axios';

export const 
  GET_SMURFS = "GET_SMURFS",
  GETTING_SMURFS = "GETTING_SMURFS",
  CREATE_SMURFS = "CREATE_SMURFS",
  CREATING_SMURF = "CREATING_SMURF",
  UPDATE_SMURF = "UPDATE_SMURF",
  UPDATING_SMURF = "UPDATING_SMURF",
  DELETE_SMURF = "DELETE_SMURF",
  DELETING_SMURF = "DELETING_SMURF",
  ERROR = "ERROR";


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


export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GETTING_SMURFS });

  axios
    .get(`http://localhost:5000/smurfs`)
    .then(response => {
        dispatch({ type: GET_SMURFS, smurfs: response.data })
    })
    .catch(error => {
        dispatch({ type: ERROR, payload: error });
    });

};

export const addSmurfs = (smurfs) => (dispatch) => {
  dispatch({ type: CREATING_SMURF });

  axios
    .post(`http://localhost:5000/smurfs`, smurfs )
    .then(response => {
        dispatch({ type: CREATE_SMURFS, smurfs: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR, payload: error });
    });
};

