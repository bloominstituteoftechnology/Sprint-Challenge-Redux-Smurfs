/*
  Be sure to import in all of the action types from `../actions`
*/
import{GETTING_SMURF, GETTING_SMURF_SUCCESS, CREATEING_SMURF, CREATE_SMURF, ERROR} from '../actions/index.js'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialStae = {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

export const smurfReducer = (state = initialState, action) => {
  switch (action.type){
    case GETTING_SMURF:
    return {...state,fetchingSmurfs:true};
    case GETTING_SMURF_SUCCESS:
    return {...state, smurfs: action.payload, fetchingSmurfs:false};

    case CREATEING_SMURF:
    return {...state, addingSmurf:true};
    case CREATE_SMURF:
    return {...state, smurfs: action.payload, addingSmurf:false}
    case ERROR:
    return {
      ...state,
      gettingFriends: false,
        creatingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
        error: action.payload
    };
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
