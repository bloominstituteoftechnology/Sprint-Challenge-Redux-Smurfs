import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';
const url = 'http://localhost:3333/smurfs'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(url)
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const addSmurf = (newSmurf) => dispatch => {
    axios
        .post(url, newSmurf)
        .then(response => {
            dispatch({ type: ADDED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const updating = () => {
  return { type: UPDATING };
}

export const updateSmurf = (editedSmurf) => dispatch => {
    axios
        .put(`${url}/${editedSmurf.id}`, editedSmurf)
        .then(response => {
            dispatch({ type: UPDATED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const deleteSmurf = (id) => dispatch => {
    axios
        .delete(`${url}/${id}`)
        .then(response => {
            dispatch({ type: DELETED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};
