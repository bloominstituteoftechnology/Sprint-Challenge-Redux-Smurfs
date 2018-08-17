import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDSMURF = 'ADDSMURF';

export const fetching_data = () => {
    const endpoint = axios.get('http://localhost:3333/smurfs');
    return (dispatch) => {
        dispatch({ type: FETCHING})

        endpoint.then((response) => {
            dispatch({ type: FETCHED, payload: response.data })
        })  
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    }
};

export const add_smurf = () => {
    const endpoint = axios.post('http://localhost:3333/smurfs');
    return (dispatch) => {
        dispatch({ type: FETCHING})

        endpoint.then((response) => {
            dispatch({ type: ADDSMURF, payload: response.data })
        })  
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    }    
}
