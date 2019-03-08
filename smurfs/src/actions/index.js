import axios from 'axios';

export const FETCH_START = 'FETCH_START',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_FAILURE = 'FETCH_FAILURE',
    ADD_SMURF = 'ADD_SMURF',
    REMOVE_SMURF = 'REMOVE_SMURF',
    SMURF_ADDED = 'SMURF_ADDED';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            dispatch({ type: FETCH_SUCCESS, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
};

export const addSmurf = smurf => dispatch => {
    console.log('smurf post', smurf);
    dispatch({ type: ADD_SMURF });
    axios
        .post('http://localhost:3333/smurfs/', smurf)
        .then(response => {
            console.log(response);
            dispatch({ type: SMURF_ADDED, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err });
        });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
