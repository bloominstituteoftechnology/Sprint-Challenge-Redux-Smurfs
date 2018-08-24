import { FETCH_SMURF, FETCHED, ERROR } from '../actions'
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
            console.log(action.payload)
            return Object.assign({}, state, {
                fetchingSmurfs: false,
                addingSmurf: true,
                smurfs: [...state.smurfs, ...action.payload]
            })
        case ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};