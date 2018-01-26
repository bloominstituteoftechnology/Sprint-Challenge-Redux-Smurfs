import * as actions from '../actions';

const initialState = {
	smurfSelected: {},
	showUpdate: false
};

export const smurfReducer = (state = initialState, action) => {
	switch(action.type) {
		case actions.SMURF:
			return {...state, smurfSelected: action.payload, showUpdate: false};
		case actions.TOGGLE_UPDATE_SMURF:
			return {...state, showUpdate: !state.showUpdate};
		default:
			return state;
	}
};