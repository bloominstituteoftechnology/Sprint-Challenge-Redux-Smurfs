/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
export const LOADING = "LOADING";
export const FETCH_SMURFS = "FETCH_SMURFS";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";


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

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      console.log(response.data);
      dispatch({ type: FETCH_SMURFS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err.errorMessage });
    });
};

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(response => {
      console.log(response.data)
      dispatch({ type: ADD_SMURF, payload: response.data })

    }
    )
    .catch(err => {
      dispatch({type: ERROR, payload: err.errorMessage})
    });
};

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETE_SMURF, payload: response.data })

    }
    )
    .catch(err => {
      dispatch({type: ERROR, payload: err.errorMessage})
    });
};