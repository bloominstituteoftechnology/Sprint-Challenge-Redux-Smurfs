import {FETCHING, FETCHED, ERROR, SMURFS_SAVED, SAVING_SMURFS, DELETING_SMURF, DELETED_SMURF} from "../actions";



const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
};

const smurfReducer = (state=initialState, action) => {
switch(action.type){
	case FETCHING:
	return Object.assign({}, state, {fetchingSmurfs: true, error: null});

	case FETCHED:
	return Object.assign({}, state, {fetchingSmurfs: false, smurfs: action.smurfs});

	case SAVING_SMURFS:
        return Object.assign({}, state, {fetchingSmurfs: false, addingSmurf: true, error: null});

        case SMURFS_SAVED:
        return Object.assign({}, state, {fetchingSmurfs: false, smurfs: action.smurfs, error: null});

	case DELETING_SMURF:
        return Object.assign({}, state, {deletingSmurf: true, fetchingSmurfs: false, error: null});


        case DELETED_SMURF:
        return Object.assign({}, state, {deletingSmurf: false, fetchingSmurfs: false, smurfs: action.smurfs, error: null});




	case ERROR:
        return Object.assign({}, state, {error: true});

	default:
	return state;
	
}
};

export default smurfReducer;




/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
