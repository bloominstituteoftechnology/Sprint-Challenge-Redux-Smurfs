import {
	GETTING_SMURFS,
	GET_SMURFS_SUCCESS,
	GET_SMURFS_FAILURE,
	ADDING_SMURF,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE,
	MURDERING_SMURF,
	MURDER_SMURF_SUCCESS,
	MURDER_SMURF_FAILURE,
	EDITING_SMURF,
	EDIT_SMURF_SUCCESS,
	EDIT_SMURF_FAILURE,
} from "../actions";

const initialState = {
	data: [],
	gettingSmurfs: false,
	addingSmurf: false,
	murderingSmurf: false,
	editingSmurf: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_SMURFS:
			return { ...state, gettingSmurfs: true };
		case GET_SMURFS_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				gettingSmurfs: false,
			};
		case GET_SMURFS_FAILURE:
			return { ...state, gettingSmurfs: false };
		case ADDING_SMURF:
			return { ...state, addingSmurf: true };
		case ADD_SMURF_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				addingSmurfs: false,
			};
		case ADD_SMURF_FAILURE:
			return { ...state, addingSmurf: false };
		case MURDERING_SMURF:
			return { ...state, murderingSmurf: true };
		case MURDER_SMURF_SUCCESS:
			return {
				...state,
				data: [...action.payload],
				murderingSmurf: false,
			};
		case MURDER_SMURF_FAILURE:
			return { ...state, murderingSmurf: false };
		case EDITING_SMURF:
			return { ...state, editingSmurf: true };
		case EDIT_SMURF_SUCCESS:
			return { ...state, data: [...action.payload] };

		case EDIT_SMURF_FAILURE:
			return { ...state, eiditingSmurf: false };
		default:
			return state;
	}
};
