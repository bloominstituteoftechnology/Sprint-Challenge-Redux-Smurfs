import { IS_FETCHING, SMURFS_FETCHED, ERROR, ADDING_SMURF, ADD_SMURF } from '../actions';

const smurfState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true
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
      case ERROR:
        return { ...state, fetchingSmurfs: false, error: action.payload };
      
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
