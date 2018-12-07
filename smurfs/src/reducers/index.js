import { FETCH_DATA_START, FETCH_DATA_GOOD, FETCH_DATA_FAIL } from "../actions";

const defaultState = {
    smurfs: [],
    error: '',
    loading: false,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                loading: true
            };
        case FETCH_DATA_GOOD:
            return {
                ...state,
                error: null,
                loading: false,
                smurfs: action.payload,
            };
        case FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/