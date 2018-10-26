import * as actionTypes from '../actions';

const initialState = {
    smurfs: [],
    gettingSmurfs: false,
    error: null
};

export const smurfReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_SMURFS:
            return {
                ...state,
                gettingSmurfs: true
            };
        case actionTypes.SMURF_SUCCESS:
            return {
                ...state,
                gettingSmurfs: false,
                smurfs: action.payload
            };
        case actionTypes.ERROR:
            return {
                ...state,
                gettingSmurfs: false
            };
        default:
        return state;
    }
}