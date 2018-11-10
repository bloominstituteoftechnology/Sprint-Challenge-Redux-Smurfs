import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING = "ADDING"

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: 'FAILED'
        });
      });
  };
};

export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios.post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        dispatch({
          type: SUCCESS,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({
          type: FAILURE,
          payload: "FAILED"
        })
      })
  }
  // return {
  //   type: ADDING,
  //   id: smurfID++,
  //   name: name,
  //   age: age,
  //   height: height
  // };
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