/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, UPLOADED_SMURFS, ADD_SMURFS, NEWLY_ADDED_SMURFS, ERROR } from '../actions' 

const initialState = {
  smurfs: [],
	fetchSmurfs: false,
	uploadedSmurf: false,
	addSmurfs: false,
	newaddedSmurfs: false,
	error: null,
}

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

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SMURFS:
		   return { ...state, fetchSmurfs: true, };
		case UPLOADED_SMURFS:
			 return { ...state, smurfs: action.payload, fetchSmurfs: false, };
		case ADD_SMURFS:
			 return { ...state, addSmurfs: true, };
		case NEWLY_ADDED_SMURFS:
			 return { ...state, addSmurfs: false };
		case ERROR: 
			 return { ...state, error: action.payload, };
		default: 
			 return state;
		}
  }

export default smurfReducer;
