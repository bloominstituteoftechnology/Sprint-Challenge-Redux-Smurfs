import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVED_DATA = 'SAVED_DATA';
export const SAVING_DATA = 'SAVING_DATA';

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
        dispatch({ type: SAVING_DATA})

        endpoint.then((response) => {
            dispatch({ type: SAVED_DATA, payload: response.data })
        })  
        .catch(err => {
            dispatch({ type: ERROR, payload: err })
        })
    }    
}
