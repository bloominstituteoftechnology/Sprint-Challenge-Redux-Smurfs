import { GET_SMURFS, DELETE_SMURF, ADD_SMURF } from '../actions/types';
import axios from 'axios';

// Axios GET request to server to retrieve array of Smurfs
export const getSmurfs = () => async dispatch => {
    const response = await axios.get('http://localhost:3333/smurfs');
    dispatch ({
        type: GET_SMURFS,
        payload: response.data
    });
};

export const deleteSmurf = (id) => {
    return {
        type: DELETE_SMURF,
        payload: id
    };
};

export const addSmurf = (smurf) => {
    return {
        type: ADD_SMURF,
        payload: smurf
    };
}