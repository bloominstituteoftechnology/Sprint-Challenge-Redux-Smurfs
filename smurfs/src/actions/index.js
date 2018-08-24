import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const ADD_SMURF = "ADD_SMURF";

const URL = "http://localhost:3333/smurfs";
export const fetchSmurfs = () => {
  console.log(URL)
  const promise = axios.get(URL)
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(({ data }) => {
        console.log("data", data)
        dispatch({
          type: FETCHED,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          error: err
        });
      });
  };
};

export const addSmurf = () => {
  axios.post(URL, {
    name: "test", 
    age: "test",
    height: "test" 
  })
}

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
