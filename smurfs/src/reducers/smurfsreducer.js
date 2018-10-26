import { 
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS, 
    FETCH_SMURFS_FAILURE, 
    ADD_SMURFS,
    ADD_SMURFS_SUCCESS, 
    ADD_SMURFS_FAILURE } 
from '../actions'

const initialState = {
    fetchingSmurfs: false,
    creatingSmurfs: false,
    smurfs: [],
    error: null
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {...state, fetchingsmurfs: true}

        case FETCH_SMURFS_SUCCESS:
            return { 
                ...state, 
                fetchingSmurfs: false, 
                smurfs: [...state.smurfs, ...action.payload]
            }  
            
        case FETCH_SMURFS_FAILURE: 
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload,
            }

        case ADD_SMURFS:
            return {...state, creatingSmurfs: true}
        
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                creatingSmurfs: false,
                smurfs: [...action.payload]
            }
           
        case ADD_SMURFS_FAILURE:
            return {
                ...state,
                creatingSmurfs: false,
                error: action.payload
            }

        default:
            return state;
    }

}