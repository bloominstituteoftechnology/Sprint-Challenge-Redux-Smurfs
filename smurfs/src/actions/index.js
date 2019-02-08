import { GET_SMURFS, DELETE_SMURF, ADD_SMURF } from '../actions/types';
import axios from 'axios';

// Axios GET request to server to retrieve array of Smurfs
export const getSmurfs = () => async dispatch => {
    const response = await axios.get('http://localhost:3333/smurfs');
    dispatch ({
        type: GET_SMURFS,
        payload: response.data // add payload to GET_SMURFS action
    });
};

//Delete Smurf Action Creator

export const deleteSmurf = (id) => async dispatch => {
    await axios.delete(`http://localhost:3333/smurfs/${id}`);
    dispatch ({
        type: DELETE_SMURF,
        payload: id
    });
};

//Add Smurf Action Creator
// Axios Post request to add a new Smurf
export const addSmurf = (smurf)  => async dispatch => {
    const response = await axios.post('http://localhost:3333/smurfs', smurf);
    dispatch ({
        type: ADD_SMURF,
        payload: smurf
    });
}