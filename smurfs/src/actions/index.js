

//== Smurf Actions =============================================================
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

//-- Dependencies --------------------------------
import axios from 'axios';

//-- Configuration -------------------------------
const REMOTE_SERVER = 'http://localhost:3333';
function remote(path) {
    return `${REMOTE_SERVER}/${path}`;
}

//-- Action Types --------------------------------
export const GET_SMURFS = 'GET_SMURFS';
export const SMURFS_RESPONSE = 'SMURFS_RESPONSE';
export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'ERROR';
export const NOT_READY = 'NOT_READY';


//== Action Generators =========================================================

//-- GET_SMURFS - Agent requests list of all Smurfs
export function getSmurfs() {
    return function (dispatch) {
        dispatch({type: FETCHING});
        // Fail half the time, so as to show error
        axios.get(remote('smurfs'))
        .then(response => {
            dispatch(smurfsResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error requesting data: ${error.response.status}`;
            dispatch(fetchError(errorMessage));
        });
    };
};

//-- SMURFS_RESPONSE - Server replied with list of all smurfs
export function smurfsResponse(smurfsData) {
    return {
        type: SMURFS_RESPONSE,
        smurfs: smurfsData,
    };
};

//-- ADD_SMURF - Agent submits a new smurf
export function addSmurf(smurfData) {
    return function (dispatch) {
        dispatch({type: FETCHING});
        axios.post(remote('smurfs'), smurfData)
        .then(response => {
            dispatch(smurfsResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            dispatch(fetchError(errorMessage));
        });
    }
}

//-- FETCH_ERROR - Server returned with error state
export function fetchError(error) {
    return {
        type: FETCH_ERROR,
        error: error
    };
}

//-- NOT_READY - User attempted an action while agent wasn't ready
export function notReady(error) {
    return {
        type: NOT_READY,
        error: error,
    };
}