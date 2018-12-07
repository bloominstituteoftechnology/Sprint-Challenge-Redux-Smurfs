import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURF = "GET_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const LOADING_SMURF = "LOADING_SMURF";
export const LOADING_COMPLETE = "LOADING_COMPLETE";
export const CREATING_SMURF = "CREATING_SMURF";
export const EDITING_SMURF = "EDITING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";

const URL = "http://localhost:3333/smurfs";
const loadingSmurf = () => dispatch => {
  dispatch({ type: LOADING_SMURF });
  axios
    .get(URL)
    .then(response => {
      console.log(response);
      dispatch({ type: LOADING_COMPLETE, payload: response.data });
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
