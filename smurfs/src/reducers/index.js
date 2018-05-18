/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, SMURFS_FETCHED, ADDING_SMURF, SMURF_ADDED, ERROR } from '../actions';

const initialState = {
   smurfs: [],
   input: '',
   fetching: false,
   fetched: false,
   adding: false,
   added: false,
   error: null
 }

 const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
    return Object.assign({}, state, { smurfs: action.payload, fetching: true })

    case SMURFS_FETCHED:
    return Object.assign({}, state, { fetching: false, fetched: true })

    case ADDING_SMURF:
    return Object.assign({}, state, { adding: true })

    case SMURF_ADDED:
    return Object.assign({}, state, { adding: false, added: true })

    case ERROR:
    return Object.assign({}, state, { error: action.payload })

    default:
    return state;
  }
 }
 export default rootReducer
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
