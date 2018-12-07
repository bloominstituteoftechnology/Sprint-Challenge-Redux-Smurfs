import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ADD_SMURF,
    REMOVE_SMURF,
    SMURF_ADDED
} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingSmurfs: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload,
                error: null
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload.err
            };
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: true
            };
        case REMOVE_SMURF:
            return {
                ...state,
                //TODO filter smurfs
                smurfs: state.smurfs.filter()
            };
        case SMURF_ADDED:
            return {
                ...state,
                addingSmurf: false,
                smurfs: action.payload,
                err: null
            };
        default:
            return state;
    }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
