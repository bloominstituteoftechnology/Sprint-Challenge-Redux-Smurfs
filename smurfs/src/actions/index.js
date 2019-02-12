import axios from 'axios';
export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const requestSmurfs = () => dispatch => {
  dispatch({type: REQUEST_SENT});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      console.log('Response:',response) 
      dispatch({type: REQUEST_SUCCESS, payload: response.data})
    })
    .catch(err => {
      dispatch({type: REQUEST_ERROR, err})
    });
};

export const addSmurf = (smurf) => dispatch => {
dispatch({type: ADD});
axios
  .post(`http://localhost:3333/smurfs`, smurf)
  .then((response) => {
  dispatch({type: REQUEST_SUCCESS, payload: response.data})
  })
  .catch(err => {
    dispatch({type: REQUEST_ERROR, err})
  });
};

export const updateSmurf = (smurf, id) => dispatch => {
  dispatch({type: UPDATE});
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then((response) => {
			dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETE});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
    dispatch({ type: REQUEST_SUCCESS, payload: response.data });
		})
		.catch((err) => {
			dispatch({ type: REQUEST_ERROR, err });
		});
}
