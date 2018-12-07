import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';


const url = 'http://localhost:3333/smurfs'

export const getSmurfs = () => dispatch => {
    dispatch({type: FETCHING_SMURFS});
    axios.get(url)
        .then(({data}) => dispatch({
            type: FETCHING_SMURFS_SUCCESS,
            payload: data
        }))
        .catch(({data}) => dispatch({
            type: FETCHING_SMURFS_FAILURE,
            payload: data
        }));
};

export const addSmurf = smurf => dispatch => {
    dispatch({type: ADDING_SMURF});
    axios.post(url, smurf)
        .then(({data}) => dispatch({
            type: ADDING_SMURF_SUCCESS,
            payload: data
        }))
        .catch(({data}) => dispatch({
            type: ADDING_SMURF_FAILURE,
            payload: data
        }));
}
