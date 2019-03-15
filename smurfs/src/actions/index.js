import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF = 'GET_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_FORM = 'UPDATE_FORM';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const getSmurf = smurfs => {
  return dispatch => {
    dispatch({ type: LOADING });
      axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
          console.log(response.data)
          dispatch({
            type: GET_SMURF,
            payload: response.data
          })
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: 'Error getting smurfs'})
        })
  }
}

export const addSmurf = smurf => {
  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post('http://localhost:3333/smurfs', {...smurf})
      .then(response => {
        console.log(response.data);
        dispatch({
          type: ADD_SMURF,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'error adding smurf'})
      })
  }
};

export const deleteSmurf = id => {
  return dispatch => {
    dispatch ({ type: LOADING });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({
          type: DELETE_SMURF,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'error deleting smurf'})
      })
  }
};


export const updateSmurf = (id, name, age, height) => {
  return dispatch => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, {
        name: name,
        age: age,
        height: height
      })
      .then(response => {
        dispatch({
          type: UPDATE_SMURF,
          payload: response.data
        })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: 'error updating smurf'})
      })
  }
}







  //  C - addSmurf
  //  R - getSmurfs
  //  U - updateSmurf
  //  D - deleteSmurf

