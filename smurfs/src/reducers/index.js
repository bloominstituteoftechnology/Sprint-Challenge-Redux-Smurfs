import {
  GET_SMURFS,
  GETTING_SMURFS,
  CREATE_SMURF,
  CREATING_SMURF,
  ADDED_SMURF,
  ERROR,
} from '../actions'

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,

}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
      return {...state, gettingSmurfs: true }
    case GET_SMURFS:
      return {...state, smurfs: action.payload, gettingSmurfs: false}
    case ERROR:
      return {
        gettingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false
      }

    case  CREATING_SMURF:
      return {...state, addingSmurf: true}
    case CREATE_SMURF:
      return {...state, smurf: action.payload, addingSmurf: false}
    case ADDED_SMURF:
      return {...state, smurfs: action.payload, addingSmurf: false}
    default: 
      return state;
  }
}
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

export default rootReducer
