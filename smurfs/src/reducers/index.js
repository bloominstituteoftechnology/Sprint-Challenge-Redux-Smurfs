import {FETCHING, FAILURE, SUCCESS, ADDING} from "../actions";

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
        case ADDING:
            return {...state, ...{adding: action.adding}};
        default:
            return state;
    }
};
