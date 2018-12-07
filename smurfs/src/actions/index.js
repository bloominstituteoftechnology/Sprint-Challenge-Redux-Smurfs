import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const LOADING_SMURF = "LOADING_SMURF";
export const LOADING_COMPLETE = "LOADING_COMPLETE";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_COMPLETE = "ADD_COMPLETE";
export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_COMPLETE = "EDIT_COMPLETE";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const REMOVE_COMPLETE = "REMOVE_COMPLETE";

const URL = "http://localhost:3333/smurfs";
export const loadingSmurf = () => dispatch => {
  dispatch({ type: LOADING_SMURF });
  axios
    .get(URL)
    .then(response => {
      dispatch({ type: LOADING_COMPLETE, payload: response.data });
    })
    .catch(err => ({ err }));
};
export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(URL, newSmurf)
    .then(response => {
      dispatch({ type: ADD_COMPLETE, payload: response.data });
    })
    .catch(err => ({ err }));
};

export const removeSmurf = id => dispatch => {
  dispatch({ type: REMOVE_SMURF });
  axios
    .delete(`${URL}/${id}`)
    .then(response => {
      dispatch({ type: REMOVE_COMPLETE, payload: response.data });
    })
    .catch(err => ({ err }));
};
export const editSmurf = (id, update) => dispatch => {
  dispatch({ type: EDIT_SMURF });
  axios
    .put(`${URL}/${id}`, update)
    .then(response => {
      dispatch({ type: EDIT_COMPLETE, paylaod: response.data });
    })
    .catch(err => ({ err }));
};
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
