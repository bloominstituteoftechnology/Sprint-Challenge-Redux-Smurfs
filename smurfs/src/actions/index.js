import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const EDIT_SMURF = "EDIT_SMURF";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAILURE = "EDIT_FAILURE";

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
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log(response)
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(response => {
      console.log(response)
      dispatch({ type: FETCH_FAILURE, payload: response });
    });
}

export const addSmurfs = (smurfInfo) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios.post('http://localhost:3333/smurfs', smurfInfo)
    .then(response => {
      console.log(response.data, 'sdfsf')
      dispatch({ type: ADD_SUCCESS, payload: response.data });
    })
    .catch(response => {
      console.log(response)
      dispatch({ type: ADD_FAILURE, payload: response });
    });
}

export const deleteSmurf = (smurfId) => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(response => {
      console.log(response.data, 'sdfsf')
      dispatch({ type: DELETE_SUCCESS, payload: response.data });
    })
    .catch(response => {
      console.log(response)
      dispatch({ type: DELETE_FAILURE, payload: response });
    });
}

export const editSmurf = (smurfId, smurfInfo) => dispatch => {
  dispatch({ type: EDIT_SMURF });
  axios.put(`http://localhost:3333/smurfs/${smurfId}`, {name: smurfInfo})
    .then(response => {
      console.log(response.data, 'sdfsf')
      dispatch({ type: EDIT_SUCCESS, payload: response.data });
    })
    .catch(response => {
      console.log(response)
      dispatch({ type: EDIT_FAILURE, payload: response });
    });
}
