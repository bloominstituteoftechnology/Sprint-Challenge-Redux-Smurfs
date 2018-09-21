import axios from "axios";

// get Smurfs function (the R in CRUD)!
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURFS" });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: "SMURFS_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
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
