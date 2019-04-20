import axios from 'axios';

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

export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const CREATING_SMURF = 'CREATING_SMURF';
export const CREATE_SMURF = 'CREATE_SMURF';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const SINGLE_SMURF = 'SINGLE_SMURF';
export const TOGGLE_UPDATE_SMURF = 'TOGGLE_UPDATE_SMURF';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETING_SMURF = 'DELETING_SMURF';

const URL = 'http://localhost:3333/smurfs/';

export const getSmurfs = () => {
  const smurfGet = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS });
    smurfGet
      .then(res => {
        dispatch({ type: GET_SMURFS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err});
      });
  };
};

export const createSmurf = smurf => {
  const smurfPost = axios.post(`${URL}`, smurf);
  return dispatch => {
    dispatch({ type: CREATING_SMURF });
    smurfPost
      .then(({ data }) => {
        dispatch({ type: CREATE_SMURF, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

// addNewSmurf = event => {
//   event.preventDefault();
//   axios.post('http://localhost:3333/smurfs', {name: this.state.name, age: this.state.age, height: this.state.height})
//   .then(response => {this.setState({ smurfs: response.data, name: "", age:"", height: "" });
// })
// }

export const deleteSmurf = id => {
  const deletedSmurf = axios.delete(`${URL}`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_SMURF });
    deletedSmurf
      .then(({ data }) => {
        dispatch({ type: DELETE_SMURF, payload: data });
        dispatch({ type: SINGLE_SMURF, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_SMURF
  };
};

export const updateSingleSmurf = smurf => {
  return {
    type: SINGLE_SMURF,
    payload: smurf
  };
};