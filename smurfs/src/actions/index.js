import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ADDING_SMURFS = "ADDING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
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

export const getSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    smurfs
      .then(response => {
        console.log(response);
        // dispatch({ type: FETCHED_SMURFS, payload: response.data.data });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: ERROR, payload: "Error fetching smurfs" });
      });
  };
};

export const createSmurfs = smurf => {
  // a smurf has the form {name: "", age: "", height: "", id: num }
  const smurfs = axios.post(`http://localhost:3333/smurfs/${id}`, smurf);
  return dispatch => {
    smurfs
      .then(response => {
        // getSmurfs after posting a new smurf
        dispatch({ type: ADDING_SMURFS });
        dispatch(getSmurfs());
      })
      .catch(error => {
        console.error(error);
        dispatch({
          type: ERROR,
          payload: "Error fetching smurfs after posting"
        });
      });
  };
};
