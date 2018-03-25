import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';

export const getSmurfs = () => {
  return dispatch => {
    dispatch({type: FETCHING});
    axios 
      .get('http://localhost:3333/smurfs')
      .then(result => dispatch({type: FETCHED, smurfs: result.data}))
      .catch(err => dispatch({type: ERROR, errorMessage: "Dropped your smurfs!"}));
  }
}

export const addSmurf = smurf => dispatch => {
    axios
      .post('http://localhost:3333/smurfs', smurf).then(response => {
        dispatch({
          type: ADD_SMURF,
        })
      }).catch(error => console.log(smurf));
}

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`, {
      id
    }).then(response => {
      dispatch({
        type: DELETE_SMURF,
        id
      })
    }).catch(error => console.log(id));
}

export const updateSmurf = smurf => dispatch => {
  console.log(smurf);
  axios
  .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf).then(response => {
    dispatch({
      type: UPDATE_SMURF,
      smurf: smurf
    })
  }).catch(error => console.log(smurf));
}