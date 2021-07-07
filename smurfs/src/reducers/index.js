/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   fetching: false,
   adding: false,
   error: null
 }

 export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
    return Object.assign({}, state, { fetching: action.payload })

    case FETCHED_SMURFS:
    return Object.assign({}, state, { smurfs: state.smurfs.concat(action.payload), fetching: false})

    case ADDING_SMURF:
    return Object.assign({}, state, { adding: action.payload })

    case ADDED_SMURF:
    return Object.assign({}, state, { smurfs: state.smurfs.concat(action.payload), adding: false})

    case ERROR:
    return Object.assign({}, state, { error: action.payload })

    default:
    return state;
  }
 }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
