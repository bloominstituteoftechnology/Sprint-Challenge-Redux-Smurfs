// ☞ 9f961353-ab89-4744-a8be-196d19d96edb

import axios from "axios";
export const LOAD_SMURFS = "LOAD_SMURFS";
export const LOADING = "LOADING";
export const ERROR = "ERROR";

// GET
export const loadSmurfs = () => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get("http://localhost:5000/smurfs")
      .then(response => {
        dispatch({ type: LOAD_SMURFS, smurfs: response.data });
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
    dispatch({ type: LOADING });
    axios
      .post('http://localhost:5000/smurfs', newSmurf)
      .then(response => {
        dispatch({ type: LOAD_SMURFS, smurfs: response.data });
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
    dispatch({ type: LOADING });
    axios
      .delete(`http://localhost:5000/smurfs/${id}`)
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
    dispatch({ type: LOADING });
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
    dispatch({ type: LOADING });
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

