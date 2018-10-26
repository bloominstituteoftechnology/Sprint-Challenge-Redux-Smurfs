import {
    GET_SMURFS,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
} from '../actions/index'

const initialState = {
    smurfs: [],
    gettingSmurfs: false,
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
        default:
            return state
    }
}
