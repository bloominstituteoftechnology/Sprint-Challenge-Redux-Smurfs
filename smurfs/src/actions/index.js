import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
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
export const fetchSmurfs = () => {
  const smurfs = axios.get("http://localhost:3333/api/smurfs");
    return dispatch => {
      dispatch({ type : FETCHING_SMURFS });
      smurfs
        .then(response => {
          console.log(response);
          dispatch({ type: FETCHED_SMURFS, payload: response.data });
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: ERROR, payload: "YOU HAVE NO SMURFS!"});
        })
    };
};

export const createSmurfs = smurf => {
  const smurfs = axios.post("http://localhost:3333/api/smurfs", smurf);
    return dispatch => {
      smurfs
        .then(response => {
          console.log(response);
          dispatch(fetchSmurfs());
        })
        .catch(error => {
          console.log(error);
          dispatch({ type: ERROR, payload: "YOU CAN NOT MAKE SMURFS!"});
        });
    };
};