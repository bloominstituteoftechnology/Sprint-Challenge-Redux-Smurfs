

//== Smurf Reducer =============================================================
/*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.

    Your initial/default state for this project could *Although does not have to* look a lot like this
    {
        smurfs: [],
        fetchingSmurfs: false
        addingSmurf: false
        updatingSmurf: false
        deletingSmurf: false
        error: null
    }
*/

//-- Dependencies --------------------------------
import * as actions from '../actions';

//-- Initial Store State -------------------------
/*const initialState = {
    fetching: false,
    smurfs: [],
    error: null,
};*/
const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null,
};
  
//-- Route Actions -------------------------------
export default function (state = initialState, action){
    switch (action.type) {
        case actions.NOT_READY      : return handleNotReady  (state, action);
        case actions.FETCH_ERROR    : return handleFetchError(state, action);
        case actions.FETCHING       : return handleFetching  (state, action);
        case actions.SMURFS_RESPONSE: return handleSmurfsList(state, action);
        default                     : return                  state         ;
    }
};

//-- Action Handling -----------------------------
function handleFetching(state, action) {
    return {
        ...state,
        fetching: true,
    };
}
function handleSmurfsList(state, action) {
    return {
        fetching: false,
        smurfs: action.smurfs,
        error: null,
    };
}
function handleFetchError(state, action) {
    return {
        ...state,
        fetching: false,
        error: action.error,
    }
}
function handleNotReady(state, action) {
    return {
        ...state,
        error: action.error,
    }
}