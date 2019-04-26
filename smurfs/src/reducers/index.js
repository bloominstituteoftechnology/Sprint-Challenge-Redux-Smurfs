/*
  Be sure to import in all of the action types from `../actions`
*/
import { PENDING, SUCCESS, FAILURE, } from "../actions";

const initialState = {
	smurfs: [],
	name: '',
	age: 0,
	height: '',
  pending: false,
	error: null,
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case PENDING:
			return {
				...state,
				pending: true,
			};
		case SUCCESS:
			return {
				...state,
				smurfs: [...action.payload],
				error: false,
				pending: false,
			};
		case FAILURE:
			return {
				...state,
				error: action.payload,
				pending: false,
			};

		default:
			return state;
	}
};

export default rootReducer;