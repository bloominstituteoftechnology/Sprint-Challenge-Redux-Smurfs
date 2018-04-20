import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';

// Re: CRUD-CRD only. Post/Get/Delete. No update/push. 

export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios //promise statements
      .get('http://localhost:3333/api/smurfs/')
      .then(result => dispatch({ type: FETCHED, smurfs: result.data }))
      .catch(err =>
        dispatch({ type: ERROR, errorMessage: 'Get Smurf Opps!' })
      );
  };
};

export const addSmurf = smurf => dispatch => {
  console.log(smurf);
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      dispatch({
        type: ADD_SMURF
      });
    })
    .catch(error => console.log(smurf));
};

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`, {
      id
    })
    .then(response => {
      dispatch({
        type: DELETE_SMURF
      });
    })
    .catch(error => console.log(id));
};