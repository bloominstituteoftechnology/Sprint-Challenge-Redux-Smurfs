import {FETCHING, FAILURE, SUCCESS} from "../actions";

const initialState = {
    smurfs: [],
    loading: false,
    adding: false,
    updating: false,
    deleting: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state, ...{
                    smurfs: action.smurfs,
                    loading: false
                }
            };
        case FETCHING:
            return {...state, ...{loading: action.loading}};
        case FAILURE:
            return {...state, ...{error: action.error}};
        default:
            return state;
    }
};
