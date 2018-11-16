// ☞ 9f961353-ab89-4744-a8be-196d19d96edb

import axios from "axios";
export const FETCHING = "FETCHING";
export const LOAD_SMURFS = "LOAD_SMURFS";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

/* Mykeal:  
1.  Should actions in smurfsActions.js have a different action type for each action? Like
  fetchingSmurfs  type: FETCHING 
  createSmurf type: CREATING
  deleteSmurf type: DELETING
  updateSmurf type: UPDATING

2.  Should all of these be exported above?
      export const LOAD_SMURFS = "LOAD_SMURFS";
      export const FETCHING = "FETCHING";
      export const CREATING = "CREATING";
      export const DELETING = "DELETING";
      export const UPDATING = "UPDATING";
      export const ERROR = "ERROR";
*/

// GET
export const fetchingSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data,fetching: false });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "I'm having a spot of trouble loading your smurfs, please give me another go, mate!",
        });
      });
  };
};

// POST
export const createSmurf = (newSmurf) => {
  return (dispatch) => {
    dispatch({ type: FETCHING });
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        dispatch({ type: LOAD_SMURFS, payload: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "I'm having a problem adding your new smurf, shall I try again?"});
      });
  };
};

// DELETE

export const deleteSmurf = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: LOAD_SMURFS, smurfs: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "Dude, your smurf won't delete.  Do you really want to 86 it?",
        });
      });
  };
};

// PUT
export const updateSmurf = updatedSmurf => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .put(`http://localhost:5000/smurfs/${updatedSmurf.id}`)
      .then(response => {
        dispatch({ type: LOAD_SMURFS, smurfs: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "Wow, I can't believe your smurf didn't update!  Should I take another shot?",
        });
      });
  };
};

export const updateSmurfForm = updatedSmurf => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .put(`http://localhost:3333/smurfs/${updatedSmurf.id}`)
      .then(response => {
        dispatch({ type: LOAD_SMURFS, smurfs: response.data });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          errorMessage:
            "Wow, I can't believe your smurf didn't update!  Should I take another shot?",
        });
      });
  };
};

