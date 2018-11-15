import axios from 'axios';
export const GET_SMURFS = "GET_SMURFS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

export const getSmurfs = () => {

  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        dispatch({
          type: GET_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const addSmurf = (smurf) => {

  return dispatch => {
    dispatch({ type: LOADING });
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        dispatch({
          type: GET_SMURFS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteSmurf = (id) => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })

  }
}

export const updateSmurf = (id, smurf) => {
  return (dispatch) => {
    dispatch({ type: LOADING })
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
      .then(response => {
        dispatch({ type: GET_SMURFS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })

  }
}