import { FETCH_SMURF, FETCHED, ADD_SMURF, ADDED, ERROR } from '../actions'
export const initialState = {
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    smurfs: [],
    error: null
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF:
            return {
                ...state,
                fetchingSmurfs: true
            }
        case FETCHED:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: [...action.payload]
            }
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: true,
            }
        case ADDED:
            return {
                ...state,
                addingSmurf: false,
                smurfs: [...action.payload]
            }
        case ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};