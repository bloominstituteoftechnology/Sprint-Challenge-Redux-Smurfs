/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const FETCHINGSMURFS = "FETCHINGSMURFS";
export const FETCHEDSMURFS = "FETCHEDSMURFS";
export const UPDATINGSMURFS = "UPDATINGSMURFS";
export const DELETINGSMURFS = "DELETINGSMURFS";
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

export const getSmurf = () => {
  const request = axios.get("http://localhost:3333/api/smurfs");
  return dispatch => {
    dispatch({ type: FETCHINGSMURFS });
    request
      .then(({ data }) => {
        dispatch({ type: FETCHEDSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addSmurf = smurf => {
  const request = axios.post("http://localhost:3333/api/smurfs", smurf);
  return dispatch => {
    dispatch({ type: FETCHINGSMURFS });
    request
      .then(({ data }) => {
        dispatch({ type: FETCHEDSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteSmurf = id => {
  const request = axios.delete("http://localhost:3333/api/smurfs/${id}");
  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: DELETINGSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const updateSmurf = smurf => {
  const request = axios.put(
    "http://localhost:3333/api/smurfs/${smurf.id}",
    smurf
  );

  return dispatch => {
    request
      .then(({ data }) => {
        dispatch({ type: UPDATINGSMURFS, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
