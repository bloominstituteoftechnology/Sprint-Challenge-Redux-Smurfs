/*
  Be sure to import in all of the action types from `../actions`
*/
import { GETTING_SMURFS, GOT_SMURFS, CREATING_SMURF, CREATED_SMURF, ERROR } from '../actions';

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: true
 }
*/

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  gotSmurfs: false,
  creatingSmurf: false,
  createdSmurf: false,
  error: true,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_SMURFS:
      return {
        ...state,
        gettingSmurfs: true,
      };

    case GOT_SMURFS:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: true,
        smurfs: action.payload,
      };

    case CREATING_SMURF:
      return {
        ...state,
        creatingSmurf: true,
      };

    case CREATED_SMURF:
      return {
        ...state,
        creatingSmurf: false,
        createdSmurf: true,
        smurfs: action.payload,
      };

    case ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        gotSmurfs: false,
        creatingSmurfs: false,
        createdSmurf: false,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default rootReducer;
