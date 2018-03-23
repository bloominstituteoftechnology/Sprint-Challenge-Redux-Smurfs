/*
  Be sure to import in all of the action types from `../actions`
*/
import {
	FETCHING,
	FETCHED,
	ERROR,
	ADDED_SMURF,
	ADDING_SMURF,
	DELETING_SMURF,
	DELETED_SMURF
} from "../actions";

/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

const initialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	deletingSmurfs: false,
	error: null
};

export const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING:
			return {
				...state,
				//  smurfs: action.smurfs,
				fetchingSmurfs: true
			};

		case ERROR:
			return {
				...state,
				error: action.message
			};
		case FETCHED:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: action.smurfs
			};
		case ADDING_SMURF:
			return {
				...state,
				addingSmurf: true
			};
		case ADDED_SMURF:
			return {
			  ...state,
			  addingSmurf: false,
				smurfs: action.smurfs.concat({
            name: action.name,
            age: action.age,
            height: action.height,
						id: action.id
				})
			}
			// return Object.assign({}, state, {
			// 	smurfs: action.smurfs.concat({
      //       name: action.name,
      //       age: action.age,
      //       height: action.height,
			// 			id: action.id
			// 	})
			// });
		case DELETING_SMURF:
			return {
        ...state,
        addingSmurf: false,
				deletingSmurfs: true
			};
		case DELETED_SMURF:
			return {
				...state,
				deletingSmurfs: false,
				smurfs: action.smurfs,
			};
		default:
			return state;
	}
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
