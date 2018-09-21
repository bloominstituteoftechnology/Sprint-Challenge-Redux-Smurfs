import { FETCHED, ERRORS, FETCHING } from '../actions';

const initialState = { smurfs: [], smurf: {}, fetching: false, error: '' };

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };

    case FETCHED:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      };

    case ERRORS:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
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
