import {
    GET_SMURFS,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR,
} from '../actions/index'

const initialState = {
    smurfs: [],
    gettingSmurfs: false,
    addingSmurf: false,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                gettingSmurfs: true,
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                gettingSmurfs: false,
                smurfs: [...state, ...action.payload],
            }
        case GET_SMURFS_ERROR:
            return {
                ...state,
                gettingSmurfs: false,
            }
        case ADD_SMURF:
            return {
                ...state,
                addingSmurf: true,
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                smurfs: [...action.payload],
            }
        case ADD_SMURF_ERROR:
            return {
                ...state,
                addingSmurf: false,
            }
        default:
            return state
    }
}
