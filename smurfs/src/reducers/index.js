/*
  Be sure to import in all of the action types from `../actions`
*/
import React from 'react';
import {FETCHING_SMURFS, FETCHED_SMURF, SMURF_ERROR,
START_SMURF, POST_SMURF, SMURF_FAIL} from '../actions';

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
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
    return {...state,
      fetchingSmurfs: true
    }
   
   case FETCHED_SMURF:
    return {...state,
      smurfs: [...state.smurfs, ...action.payload],
      fetchingSmurfs: false,
      addingSmurf: true
    }
    
    case SMURF_ERROR:
    return {...state, 
      error: action.payload
    }

    case START_SMURF:
    return {...state, addingSmurf: true }

    case POST_SMURF:
    return{...state, 
      addingSmurf: false, smurfs: action.payload
    }

    case SMURF_FAIL:
    return{...state, error: action.payload  
    }

    default:
    return state;
  }
}

