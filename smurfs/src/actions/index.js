import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const FETCH_ERROR = "FETCH_ERROR";
export const SAVE_SMURF = "SAVE_SMURF";
export const SMURF_SAVED = "SMURF_SAVED";
export const SAVE_ERROR = "SAVE_ERROR";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SMURF_UPDATED = "SMURF_UPDATED";
export const UPDATE_ERROR = "UPDATE_ERROR";
export const DELETE_SMURF = "DELETE_SMURF";
export const SMURF_DELETED = "SMURF_DELETED";
export const DELETE_ERROR = "DELETE_ERROR";


export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS });
    axios
        .get("http://localhost:3333/smurfs")
        .then(({ data }) => dispatch({ type: SMURFS_FETCHED, payload: data }))
        .catch(error => {
            dispatch({ type: FETCH_ERROR, errorMessage: 'Error fetching smurfs' });
        });
};

export const addSmurf = data => dispatch => {
    dispatch({ type: SAVE_SMURF });
    axios
        .post("http://localhost:3333/smurfs", data)
        .then(({ data }) => {
            dispatch({ type: SMURF_SAVED, payload: data });
        })
        .catch(error => {
            dispatch({ type: SAVE_ERROR, errorMessage: 'Error saving smurf' });
        });
};

export const updateSmurf = ({ id, name, age, height }) => dispatch => {
    dispatch({ type: UPDATE_SMURF });
    axios
        .put(`http://localhost:3333/smurfs/${id}`, { name, age, height } )
        .then(({ data }) => {
            console.log(data);
            dispatch({ type: SMURF_UPDATED, payload: data });
        })
        .catch(error => {
            dispatch({ type: UPDATE_ERROR, errorMessage: 'Error updating smurf' });
        });
};

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(() => dispatch({ type: SMURF_DELETED, id }))
        .catch(error => {
            dispatch({ type: DELETE_ERROR, errorMessage: 'Error deleting smurf' });
        });
};
