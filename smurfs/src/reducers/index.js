import * as actions from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

 const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   addingSmurf: false,
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

export default smurfDUCER = (state = initialState, action) => {
    switch(action.type){
      case actions.GETTING_SMURFS:
        return {...state, gettingSmurfs: true}
      
      case actions.GET_SUCCESS:
        return {...state, smurfs: action.payload, gettingSmurfs: false, error: false}
      
      case actions.ADDING_SMURF:
        return {...state, addingSmurf: true, error: false}

      case actions.ADD_SUCCESS:
        return {...state, smurfs: action.payload, addingSmurf: false, error: false}

      case actions.UPDATING_SMURF:
        return {...state, updatingSmurf: true, error: false}

      case actions.UPDATE_SUCCESS:
        return {...state, smurfs: action.payload, updatingSmurf: false, error: false}

      case actions.DELETING_SMURF:
        return {...state, deletingSmurf: true, error: false}

      case actions.DELETE_SUCCESS:
        return {...state, smurfs: action.payload, deletingSmurf: false, error: false}

      case actions.ERROR:
        return {...state, error: true}

      default:
      return state
    }
}