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
      dispatch({ type: ERROR, errorMessage: 'Error getting the data'})
    });
};

export const addSmurf = (name, age, height) => (dispatch) => {
  dispatch({ type: ADDING });

  axios.post('http://localhost:3333/smurfs', {name, age, height})
    .then((response) => {
      dispatch({ type: ADDED, smurfs: response.data })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: error})
    });
};

export const updateSmurf = (name, age, height, id) => (dispatch) => {
  dispatch({ type: UPDATING });

  axios.put(`http://localhost:3333/smurfs/${id}`, {name, age, height})
    .then((response) => {
      dispatch({ type: UPDATED, smurf: response.data.foundSmurf })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error updating the data'})
    });
};

export const deleteSmurf = (id) => (dispatch) => {
  dispatch({ type: DELETING });

  axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((response) => {
      dispatch({ type: DELETED, id: response.data.SmurfRemoved.id })
    })
    .catch((error) => {
      dispatch({ type: ERROR, errorMessage: 'Error deleting the data'})
    });
};

export const selectSmurf = (id) => (dispatch) => {
  dispatch({ type: SELECT, id: id });
};
