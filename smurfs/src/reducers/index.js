import {
	GETTING_SMURFS,
	GET_SMURFS_SUCCESS,
	GET_SMURFS_FAILURE,
	ADDING_SMURF,
	ADD_SMURF_SUCCESS,
	ADD_SMURF_FAILURE,
} from "../actions";

const initialState = {
	data: [],
	gettingSmurfs: false,
	addingSmurf: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GETTING_SMURFS:
			return Object.assign({}, state, { gettingSmurfs: true });
		case GET_SMURFS_SUCCESS:
			return Object.assign({}, state, {
				data: [...state.data, ...action.payload],
				gettingSmurfs: false,
			});
		case GET_SMURFS_FAILURE:
			return Object.assign({}, state, {
				gettingSmurfs: false,
			});
		case ADDING_SMURF:
			return Object.assign({}, state, { addingSmurf: true });
		case ADD_SMURF_SUCCESS:
			return Object.assign({}, state, {
				data: action.payload,
				addingSmurfs: false,
			});
		case ADD_SMURF_FAILURE:
			return Object.assign({}, state, { ADDING_SMURF: false });
		default:
			return state;
	}
};
