/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, SMURFS_FETECHED,
  SAVING_SMURF, SMURF_SAVED, 
  UPDATING_SMURF, SMURF_UPDATED, 
  DELETING_SMURF, SMURF_DELETED, 
  ERROR} from '../actions';

//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState ={ smurfs: [],
                      fetchingSmurfs: true,
                      smurfsFetched: false,
                      smurfSaved: false,
                      smurfUpdated: false,
                      smurfDeleted: false,
                      savingSmurf: false,
                      updatingSmurf: false,
                      deletingSmurf: false,
                      error: null
                    }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfReducer = (state=initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_SMURFS:
      return Object.assign({}, 
                          state, 
                          { fetchingSmurfs: true });
    case SMURFS_FETECHED:
      return Object.assign({}, 
                          state, 
                          { smurfs: [...state.smurfs, ...action.payload], 
                            fetchingSmurfs: false,
                            smurfsFetched: true});
    case SAVING_SMURF:
      return Object.assign({}, 
                        state, 
                        { fetching: true });
    case SMURF_SAVED:
      return Object.assign({}, 
                        state, 
                        { smurfs: [...state.smurfs, ...action.payload], 
                          savingSmurfs: false,
                          smurfSaved: true});
    // case FETCHING:
    //   return Object.assign({}, 
    //                     state, 
    //                     { fetching: true });
    // case FETCHED:
    //   return Object.assign({}, 
    //                     state, 
    //                     { chars: [...state.chars, ...action.payload], 
    //                       fetching: false,
    //                       fetched: true});
    // case FETCHING:
    //   return Object.assign({}, 
    //                     state, 
    //                     { fetching: true });
    // case FETCHED:
    //   return Object.assign({}, 
    //                     state, 
    //                     { chars: [...state.chars, ...action.payload], 
    //                       fetching: false,
    //                       fetched: true});
    case ERROR:
      return Object.assign({}, 
                          state,
                          { fetching: false, 
                            error: "Error fetching smurf data"});

    default:
      return state;
  }
}

export default smurfReducer;