import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ADDERROR = 'ADDERROR';


export const getFriends = () => (dispatch) => {

    dispatch({ type: FETCHING });

    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        dispatch({ type: FETCHED, smurfs: response.data });
    })
    .catch(err => {
        dispatch({ type: ERROR, errorMessage: 'Error fetching the smurfs' });
    })
}

export const addFriends = (smurfs) => (dispatch) => {
    dispatch({ type: ADDING });    
    axios.post('http://localhost:3333/smurfs', smurfs)
       
    .then(response => {
        dispatch({ type: ADDED, smurfs: response.data });
    })
    .catch(err => {
        dispatch({ type: ADDERROR, errorMessage: 'Error adding the smurfs' });
    })
}