import {GET_SMURFS,
        GOT_SMURFS,
        ERRORS} from '../actions';


const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   gotSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
  //  updatingSmurf: false,
  //  updatedSmurf: false,
  //  deletingSmurf: false,
  //  deletedSmurf: false,
   error: null,
 }

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_SMURFS:
        return Object.assign({}, state, {
          gettingSmurfs: true,
        })
      case GOT_SMURFS:
        return Object.assign({}, state, {
          gettingSmurfs: false,
          gotSmurfs: true,
          smurfs: action.payload
        })
      case ERRORS:
        return Object.assign({}, state, {
          gettingSmurfs: false,
          gotSmurfs: false,
          addingSmurf: false,
          addedSmurf: false,
          error: action.payload,
        })

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