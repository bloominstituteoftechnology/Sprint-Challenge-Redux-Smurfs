import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

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
        }))
};


