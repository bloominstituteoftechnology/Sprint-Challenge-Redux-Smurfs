//-- Dependencies --------------------------------
import axios from 'axios';

//-- Configuration -------------------------------
const REMOTE_SERVER = 'http://localhost:3333';

//-- Action Types --------------------------------
export const GET_SMURFS = 'GET_SMURFS';
export const SMURFS_RESPONSE = 'SMURFS_RESPONSE';
export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'ERROR';
export const NOT_READY = 'NOT_READY';
export const FOCUS_SMURF = 'FOCUS_SMURF';
export const FOCUS_CANCEL = 'FOCUS_CANCEL';
export const DELETE_SMURF = 'DELETE_SMURF';


//== Action Generators =========================================================

//-- SMURFS_RESPONSE - Server replied with list of all smurfs
export function smurfsResponse(smurfsData) {
    return {
        type: SMURFS_RESPONSE,
        smurfs: smurfsData,
    };
};

//-- GET_SMURFS - Agent requests list of all Smurfs
export function getSmurfs() {
    return function (dispatch) {
        server.get('smurfs', null, dispatch)
    };
};

//-- (null) - Agent submits a new smurf
export function addSmurf(smurfData) {
    return function (dispatch) {
        server.post('smurfs', smurfData, dispatch);
    }
}

//-- (null) - Agent submits new info for a smurf
export function updateSmurf(smurfData) {
    return function (dispatch) {
        server.put(`smurfs/${smurfData.id}`, smurfData, dispatch);
    }
}

//-- (null) - Agent wants to delete a smurf
export function deleteSmurf(id) {
    return function (dispatch) {
        server.delete(`smurfs/${id}`, null, dispatch)
    }
}

//-- FOCUS_SMURF - Agent wants to focus on one smurf for editing
export function focusSmurf(smurfId) {
    return {
        type: FOCUS_SMURF,
        id: smurfId,
    };
}

//-- FOCUS_CANCEL - Agent wants to return to full list view
export function focusCancel() {
    return {
        type: FOCUS_CANCEL,
        id: null,
    };
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


//== Utilities =================================================================

//-- Server (should probably be middleware) ------
const server = {
    // Configuration
    address: REMOTE_SERVER,
    // Http Methods
    get(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.get(this.formatUrl(url), data),
            dispatch,
        );
    },
    post(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.post(this.formatUrl(url), data),
            dispatch,
        );
    },
    put(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.put(this.formatUrl(url), data),
            dispatch,
        );
    },
    delete(url, data, dispatch){
        dispatch({type: FETCHING});
        this.standardHandling(
            axios.delete(this.formatUrl(url), data),
            dispatch,
        );
    },
    // Utilities
    standardHandling(axiosPromise, dispatch) {
        axiosPromise
        .then(response => {
            dispatch(smurfsResponse(response.data));
        })
        .catch(error => {
            let errorMessage = `Error ${error.response.status}: ${error.response.data.Error}`;
            dispatch(fetchError(errorMessage));
        });
    },
    formatUrl(path) {
        return `${this.address}/${path}`;
    }
}