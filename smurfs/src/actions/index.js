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
import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHED_SMURF = "FETCHED_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const SUBMIT_SMURF = "SUBMIT_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";



export const fetching_smurf = () => {
  const getInfo = axios.get("http://localhost:5000/api/smurfs");
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    getInfo
      .then(({ data }) => {
        dispatch({ type: FETCHED_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const newsmurf = nsmurf => {
  const getInfo = axios.post("http://localhost:5000/api/smurfs", nsmurf);
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    getInfo
      .then(({ data }) => {
        dispatch({ type: FETCHED_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const deleteSmurf = id => {
  const getInfo = axios.delete(`http://localhost:5000/api/smurfs/${id}`);
  return dispatch => {
    getInfo
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editSmurf = (id, smurfs) => {
  return { type: EDIT_SMURF, smurfs, id };
};
export const submitSmurf = nsmurf => {
  console.log(nsmurf);
  const getInfo = axios.put(
    `http://localhost:5000/api/smurfs/${nsmurf.id}`,
    nsmurf
  );
  return dispatch => {
    getInfo
      .then(({ data }) => {
        dispatch({ type: SUBMIT_SMURF, smurfs: data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

