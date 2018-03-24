import axios from 'axios';
export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const SELECT = 'SELECT';
export const ERROR = 'ERROR';


export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GETTING });

  axios.get('http://localhost:3333/smurfs')
    .then((response) => {
      dispatch({ type: GOT, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error })
    });
};

export const addSmurf = (name, age, height) => (dispatch) => {
  dispatch({ type: ADDING });

  axios.post('http://localhost:3333/smurfs', {name, age, height})
    .then((response) => {
      dispatch({ type: ADDED, smurfs: response.data })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: ERROR, errorMessage: error.response.data.Error })
    });
};

export const updateSmurf = (name, age, height, id) => (dispatch) => {
  dispatch({ type: UPDATING });

  axios.put(`http://localhost:3333/smurfs/${id}`, {name, age, height})
    .then((response) => {
      dispatch({ type: UPDATED, smurf: response.data, id: id })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error })
    });
};

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: DELETING });

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
      dispatch({ type: DELETED, id: id })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error.response.data.Error })
    });
};

export const selectSmurf = (id) => (dispatch) => {
  dispatch({ type: SELECT, id: id });
};
