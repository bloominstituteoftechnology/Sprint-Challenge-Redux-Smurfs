import { FETCHING, FETCHED, ADDING, UPDATING, DELETING, ERROR } from '../actions';

 const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING:
    return {...state, fetchingSmurfs: true};
    case FETCHED:
    return {...state, smurfs: [...action.payload]};
    case ADDING:
    case UPDATING:
    case DELETING:
    case ERROR:
    return {...state, error: action.err };
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
