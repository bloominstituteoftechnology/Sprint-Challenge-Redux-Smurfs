import * as actions from '../actions';

//-- Initial Store State -------------------------
const initialState = {
    smurfs: [],
    fetching: false,
    error: null,
    focus: null,
};
  
//-- Route Actions -------------------------------
export default function (state = initialState, action){
    switch (action.type) {
        case actions.NOT_READY      : return handleNotReady  (state, action);
        case actions.FETCH_ERROR    : return handleFetchError(state, action);
        case actions.FETCHING       : return handleFetching  (state, action);
        case actions.SMURFS_RESPONSE: return handleSmurfsList(state, action);
        case actions.FOCUS_CANCEL   : /* Fall Through */
        case actions.FOCUS_SMURF    : return handleFocus     (state, action);
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
        ...state,
        fetching: false,
        smurfs: action.smurfs,
        error: null,
        focus: null,
    };
}
function handleFetchError(state, action) {
    return {
        ...state,
        fetching: false,
        error: action.error,
    };
}
function handleNotReady(state, action) {
    return {
        ...state,
        error: action.error,
    };
}
function handleFocus(state, action) {
    return {
        ...state,
        focus: action.id,
    };
}