import axios from 'axios';
/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = 'GET_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const FETCHING = 'FETCHING';
export const ERROR_GETTING_SMURFS = 'ERROR_GETTING_SMURFS';
export const SHOW_CREATE_FORM = 'SHOW_CREATE_FORM';

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

export const getSmurfs = () => {
    const smurfs = axios.get('http://localhost:3333/smurfs/');
    console.log('Coming  back from server with smurfs: ', smurfs);
    return dispatch => {
        dispatch({type: FETCHING, fetching: true});
        smurfs
            .then(response => {
                console.log('response.data',response.data)
                dispatch({type: GET_SMURFS, payload: response.data});
                dispatch({type: FETCHING, fetching: false});
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_SMURFS, payload: err});
            });
    };
};

export const addSmurf = (smurf) => {

    const newSmurf = axios.post('http://localhost:3333/smurfs', {
        name:smurf.name,
        age:smurf.age,
        height:smurf.height,
    });

    return dispatch => {
        newSmurf
            .then(({data}) => {
                dispatch({type: ADD_SMURF, payload: data});
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_SMURFS, payload: err});
            });
    };
};

export const showCreateForm = (val) => {
    return dispatch => {
        dispatch({type: SHOW_CREATE_FORM, showCreateForm: val});
    };
};

export const updateSmurf = () => {

};

export const deleteSmurf = () => {

};

