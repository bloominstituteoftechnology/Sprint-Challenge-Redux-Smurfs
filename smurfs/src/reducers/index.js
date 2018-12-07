import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};

export default (smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetchingSmurfs: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false
            };
        case FETCH_FAILURE:
            return {
                ...state,
                error: err
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, payload.smurf]
            };
        case REMOVE_SMURF:
            return {
                ...state,
                //TODO filter smurfs
                smurfs: state.smurfs.filter()
            };
    }
});

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
