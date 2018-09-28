/*
  Be sure to import in all of the action types from `../actions`
*/
import{
GETTING_SMURF,
GETTING_SMURF_SUCCESS,
UPDATING_SMURF,
UPDATE_SMURF_SUCCESS,
DELETEING_SMURF,
DELETE_SMURF,
CREATEING_SMURF,
CREATE_SMURF,
ERROR
} from './actions'
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
const initialStae = {
  smurfs: [],
  fetchingSmurfs: false
  addingSmurf: false
  updatingSmurf: false
  deletingSmurf: false
  error: null
}

export const smurfReducer ={state = initialState, action}{
  switch (action.type){
    case GETTING_SMURF:
    return {...state,fetchingSmurfs:true};
    case GETTING_SMURF_SUCCESS:
    return {...state, smurfs: action.payload, fetchingSmurfs:false};
    case UPDATING_SMURF:
    return {..state, updatingSmurf: true};
    case UPDATE_SMURF_SUCCESS:
    return {...state,smurfs:action.payload, updatingSmurf: true};
    case DELETEING_SMURF:
    return {...state, deletingSmurf: true};
    case DELETE_SMURF:
    return {...state, smurfs:action.payload,deletingSmurf:false}
    case CREATEING_SMURF:
    return {...state, addingSmurf:true};
    case CREATE_SMURF:
    return {...state, smurfs:action.payload, addingSmurf:false}
    case ERROR:
    return {
      ....state,
      gettingFriends: false,
        creatingFriend: false,
        deletingFriend: false,
        updatingFriend: false,
        error: action.payload
    }
  }
}


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
