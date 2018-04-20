import axios from 'axios';

export const FETCHING = 'FETECHING';
export const FETCHED = 'FETCHED';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ERROR = 'ERROR';

const URL = 'http://localhost:3333/smurfs';

// getting
export const getSmurfs = () => {
    const smurfs = axios.get('http://localhost:3333/smurfs');

    console.log(smurfs);
    return dispatch => {
        dispatch({type:FETCHING});
        smurfs
            .then(({data}) => {
                console.log(data);
                dispatch({type: FETCHED, payload: data});
            })
            .catch((error) => {
                dispatch({type: ERROR, payload: error});
            })
    }
};

// adding
export const addSmurf = (smurf) => {
    const smurfs = axios.post(URL, {...smurf});

    return dispatch => {
        dispatch({type:ADDING_SMURF});
        smurfs
            .then(({data}) =>{
                dispatch({type: ADDING_SMURF, payload:data})
            })
            .catch((error) => {
                dispatch({type:ERROR, payload:error})
            })
    }

};