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


import {FETCHING_SMURFS, SMURFS_FETCHED, SMURFS_FETCH_ERROR} from '../actions';
import {POSTING_SMURF, SMURF_POSTED, SMURF_POSTING_ERROR} from '../actions';
import {DELETING_SMURF, SMURF_DELETED, SMURF_DELETING_ERROR} from '../actions';
import {FETCHING_SMURF} from '../actions';

const initialState = {
  smurfs: [],
  smurf: {},
  fetching:false,
  fetched:false,
  posting:false,
  posted:false,
  putting:false,
  put:false,
  deleting:false,
  deleted:false,
  err:null
}

const smurfsReducer = (state = initialState, action) => {

  switch (action.type) {
    //Getting smurfs
    case FETCHING_SMURFS:
      return {...state, fetching:true, fetched:false, posting:false, posted:false, deleting:false, deleted:false}
    case SMURFS_FETCHED:
      return {...state, smurfs:action.payload, fetching:false, fetched:true, posting:false, posted:false, deleting:false, deleted:false}
    case SMURFS_FETCH_ERROR:
      return {...state, err:action.payload}
    
    //Posting a new smurf
    case POSTING_SMURF:
      return {...state, fetching:false, fetched:false, posting:true, posted:false, deleting:false, deleted:false}
    case SMURF_POSTED:
      return {...state, smurfs:action.payload, fetching:false, fetched:true, posting:false, posted:true, deleting:false, deleted:false}
    case SMURF_POSTING_ERROR:
      return {...state, err:action.payload}
    
    //Deleting a smurf
    case DELETING_SMURF:
      return {...state, fetching:false, fetched:false, posting:true, posted:false, deleting:true, deleted:false}
    case SMURF_DELETED:
      return {...state, smurfs:action.payload, fetching:false, fetched:false, posting:true, posted:false, deleting:false, deleted:true}
    case SMURF_DELETING_ERROR:
      return {...state, err:action.payload}

    //Getting smurf
    case FETCHING_SMURF:
      return {...state, smurf: [...state.smurfs].filter(s => s.id === action.payload)[0]}
    // case SMURF_FETCHED:
    //   return {...state, friend:action.payload, fetching:false, fetched:true, posting:false, posted:false, deleting:false, deleted:false}
    // case SMURF_FETCH_ERROR:
    //   return {...state, err:action.payload}

    default:
      return state
  }
}

export {smurfsReducer}