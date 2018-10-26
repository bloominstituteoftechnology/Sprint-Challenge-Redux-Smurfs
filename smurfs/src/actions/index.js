import axios from 'axios';

export const FETCHING_SMURFS= 'FETCHING_SMURFS';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';
export const CREATING_SMURFS="CREATING_SMURFS"; 
export const CREATED_SMURFS="CREATED_SMURFS"; 
export const SINGLE_SMURFS="SINGLE_SMURFS"; 
export const TOGGLE_SMURFS="TOGGLE_SMURFS"; 
export const ERROR ="ERROR"; 

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs/')
    .then(response => {
      console.log(response);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_SMURFS_FAILURE, payload: error });
    });
};

export const createSmurfs = smurf =>{
    const newSmurf = axios.post(`http://localhost:3333/smurfs/`, smurf); 
    return dispatch => {
        dispatch({ type: CREATING_SMURFS}); 
        newSmurf
        .then(({ data }) => {
            dispatch({ type: CREATED_SMURFS, payload: data}); 
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err}); 
        })
    };
}; 

export const toggleShowUpdate = () => {
    return{
        type: TOGGLE_SMURFS
    };
}; 

export const updateSingleSmurf = smurf => {
    return {
        type: SINGLE_SMURFS, 
        payload: smurf
    }; 
};


