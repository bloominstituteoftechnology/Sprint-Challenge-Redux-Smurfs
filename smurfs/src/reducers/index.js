import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF,
          SMURF_ADDED, FIND_SMURF, DESELECT_SMURF, ERROR } from '../actions';

const initialState = {
  isFetchingSmurfs: false,
  isAddingSmurf: false,
  viewSmurf: false,
  selectedSmurf: null,
  smurfs: [],
  error: null
}

export const smurfsReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCHING_SMURFS:
      return {
        ...state,
        isFetchingSmurfs: true,
      }
    case FETCHED_SMURFS:
      return{
        ...state,
        isFetchingSmurfs: false,
        smurfs: action.payload
      }
    case ADDING_SMURF:
      return {
        ...state,
        isAddingSmurf: true
      }
    case SMURF_ADDED:
      return {
        ...state,
        isAddingSmurf: false,
        smurfs: action.payload
      }
    case FIND_SMURF:
      return {
        ...state,
        viewingSmurf: true,
        selectedSmurf: state.smurfs.filter(smurf => smurf.id === action.id)[0],
      }
    case DESELECT_SMURF:
      return {
        ...state,
        viewingSmurf: false,
        selectedSmurf: null
      }
    case ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}


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
