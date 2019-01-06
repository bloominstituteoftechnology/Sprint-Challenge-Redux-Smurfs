import { FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF,
          SMURF_ADDED, FIND_SMURF, DESELECT_SMURF,
          STARTED_EDITING, CANCEL_EDITING, UPDATING_SMURF,
          SMURF_UPDATED, DELETING_SMURF, SMURF_DELETED, ERROR } from '../actions';

const initialState = {
  isFetchingSmurfs: false,
  isAddingSmurf: false,
  isEditingSmurf: false,
  isUpdatingSmurf: false,
  isDeletingSmurf: false,
  viewingSmurf: false,
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
    case STARTED_EDITING:
      return {
        ...state,
        isEditingSmurf: true
      }
    case CANCEL_EDITING:
      return {
        ...state,
        isEditingSmurf: false
      }
    case UPDATING_SMURF:
      return {
        ...state,
        isUpdatingSmurf: true,
      }
    case SMURF_UPDATED:
      return {
        ...state,
        isEditingSmurf: false,
        isUpdatingSmurf: false,
        smurfs: action.payload
      }
    case DELETING_SMURF:
      return {
        ...state,
        isDeletingSmurf: true,
      }
    case SMURF_DELETED:
      return {
        ...state,
        viewingSmurf: false,
        isDeletingSmurf: false,
        selectedSmurf: null,
        smurfs: action.payload
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
