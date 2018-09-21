import axios from "axios";


// add Smurf function (the C in CRUD)
export const addSmurf = (newSmurf) => {
  return dispatch => {
    dispatch({ type: 'ADDING_SMURF' });
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        dispatch({ type: 'SMURF_ADDED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

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

// get Smurf - to get a singular smurf another part of the CRUD R!
export const getSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_SMURF' });
    axios
      .get(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// edit smurf action creator the U in CRUD
export const editSmurf = (editedSmurf) => {
  return dispatch => {
    dispatch({ type: 'EDITING_SMURF' });
    axios
      .put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
      .then(response => {
        dispatch({ type: 'SMURF_EDITED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// delete smurf action creator the D in CRUD
export const deleteSmurf = (id) => {
  return dispatch => {
    dispatch({ type: 'DELETING_SMURF' });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: 'SMURF_DELETED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
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
