/*
  Be sure to import in all of the action types from `../actions`
*/
import{ ADDED_SMURF, UPDATED_SMURF, DELETED_SMURF, FETCHING_SMURFS, FETCHED_SMURFS, ADDING_SMURF, UPDATING_SMURF, DELETING_SMURF, ERROR} from '../actions/index';

const initialState ={
   smurfs: [],
   fetchingSmurfs: false,
   fetchedSmurfs: false,
   addingSmurf: false,
   addedSmurf: false,
   updatingSmurf: false,
   updatedSmurf: false,
   deletingSmurf: false,
   deletedSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case ADDED_SMURF:
      return {
        ...state,
        addingSmurf: false,
        addedSmurf: true,
        smurfs: action.payload,
      };
    case UPDATED_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        updatingSmurf: false,
        updatedSmurf: true,
      };
    case DELETED_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => {
          return smurf.id !== action.payload.SmurfRemoved.id;
        }),
        deletingSmurf: false,
        deletedSmurf: true,
      };
    case FETCHING_SMURFS:
      return {...state,
        fetchingSmurfs: true,};
    case FETCHED_SMURFS:
      return {...state,
        fetchingSmurfs: false,
        fetchedSmurfs: true,
        smurfs: action.payload,
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true,
      };
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf:true,
      };
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf:true,
      };
    case ERROR:
      return state;
    default: 
      return state;
    };
}
