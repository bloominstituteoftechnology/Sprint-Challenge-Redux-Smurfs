import { IS_FETCHING, 
  SMURFS_FETCHED, 
  ERROR, 
  ADDING_SMURF, 
  ADD_SMURF,
  DELETING_SMURF,
  DELETE_SMURF,
  THIS_SMURF,
  TOGGLE_EDIT_SMURF,
  EDIT_SMURF,
  EDITING_SMURF,
 } from '../actions';

const smurfState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: true,
   smurfSelected: {},
   showEdit: false,
   updatingSmurf: false,
 }

 const smurfs = (state = smurfState, action) => {
  switch (action.type) {
      case IS_FETCHING:
        return {
          ...state, 
          fetchingSmurfs: true, 
      };
      case SMURFS_FETCHED:
        return {
          ...state,
          smurfsFetched: true,
          fetchingSmurfs: false,
          smurfs: action.payload
            };
      case ADDING_SMURF:
        return { 
          ...state, 
          addingSmurf: true,
        };
      case ADD_SMURF:
        return {
          ...state,
          addingSmurf: false,
          smurfs: action.payload
        }
      case DELETING_SMURF:
        return { 
          ...state, 
          deletingSmurf: true
        };
      case DELETE_SMURF:
        console.log("DELETE_SMURF action: ", action);
        console.log("DELETE_SMURF state: ", state);
        return { 
          ...state,
          smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload.SmurfRemoved.id),
          deletingSmurf: false
        }
      case THIS_SMURF:
        return {
          ...state,
          smurfSelected: action.payload,
          showEdit: false
        }
      case TOGGLE_EDIT_SMURF:
        return {
          ...state,
          showEdit: !state.showEdit 
        }
      case EDITING_SMURF:
        return {
          ...state,
          updatingSmurf: true
        }
      case EDIT_SMURF:
        return {
          ...state,
          updatingSmurf: false,
          smurfs: action.payload
        }
      case ERROR:
        return { 
          ...state, 
          fetchingSmurfs: false, 
          error: action.payload 
        };
      default:
          return state;
  }
}

export default smurfs;

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as ??? rootReducer ???. 
  This will guard your ??? namespacing issues ???.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
