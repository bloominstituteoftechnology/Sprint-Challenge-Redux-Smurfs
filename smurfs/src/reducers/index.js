import * as actions from "../actions";

const intialState = {
	smurfs: [],
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = intialState, action) => {
	switch (action.type) {
		case actions.ADD:
			return {
				...state,
				smurfs: [...action.data],
				fetchingSmurfs: false
			};
		case actions.FETCH:
			return { ...state, fetchingSmurfs: true };
		case actions.GET:
			return { ...state, smurfs: action.data, fetchingSmurfs: false };
		case actions.DELETE:
			return {
				...state,
				fetchingSmurfs: false,
				smurfs: state.smurfs.filter(item => item.id !== action.id)
			};
		case actions.ERROR:
			return { ...state, error: action.error, fetchingSmurfs: false };
		default:
			return state;
	}
};
export default reducer;
