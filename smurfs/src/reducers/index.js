import {
    GET_SMURFS,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_ERROR,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_ERROR,
    DELETE_SMURF,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_ERROR,
    UPDATE_SMURF,
    UPDATE_SMURF_SUCCESS,
    UPDATE_SMURF_ERROR,
} from '../actions/index'

const initialState = {
    smurfs: [],
    gettingSmurfs: false,
    addingSmurf: false,
    deletingSmurf: false,
    updatingSmurf: false,
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
        case DELETE_SMURF:
            return {
                ...state,
                deletingSmurf: true,
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                deletingSmurf: false,
                smurfs: action.payload,
            }
        case DELETE_SMURF_ERROR:
            return {
                ...state,
                deletingSmurf: false,
            }
        case UPDATE_SMURF:
            return {
                ...state,
                updatingSmurf: true,
            }
        case UPDATE_SMURF_SUCCESS:
            return {
                ...state,
                updatingSmurf: false,
                smurfs: action.payload,
            }
        case UPDATE_SMURF_ERROR:
            return {
                ...state,
                updatingSmurf: false,
            }
        default:
            return state
    }
}
