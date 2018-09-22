import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const ADD_SMURF = "ADD_SMURF";
export const ADDING_SMURF = "ADDING_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const ERROR = "ERROR";

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });

    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({
          type: FETCH_SMURFS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        });
      })
  }
}

export const addSmurf = (smurf) => {
  const newSmurf = axios.post('http://localhost:3333/smurfs', smurf);

  return dispatch => {
    dispatch({ type: ADDING_SMURF });

    newSmurf
      .then(({data}) => {
        dispatch({
          type: ADD_SMURF,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR,
          payload: error
        });
      })
  }
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETING_SMURF});

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(() => {
      dispatch({type: DELETE_SMURF, id})
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      });
    })
}