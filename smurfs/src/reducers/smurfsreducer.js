// import { 
//     FETCH_SMURFS,
//     FETCH_SMURFS_SUCCESS, 
//     FETCH_SMURFS_FAILURE, 
//     ADD_SMURFS,
//     ADD_SMURFS_SUCCESS, 
//     ADD_SMURFS_FAILURE } 
// from '../actions'

import * as actionTypes from '../actions';

const initialState = {
    fetchingSmurfs: false,
    creatingSmurfs: false,
    smurfs: [],
    error: null
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SMURFS:
            return {...state, fetchingsmurfs: true}

        case actionTypes.FETCH_SMURFS_SUCCESS:
            return { 
                ...state, 
                fetchingSmurfs: false, 
                smurfs: action.payload,
                error:null
            }  
            
        case actionTypes.FETCH_SMURFS_FAILURE: 
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload,
            }

        case actionTypes.ADD_SMURFS:
            return {...state, creatingSmurfs: true}
        
        case actionTypes.ADD_SMURFS_SUCCESS:
            return {
                ...state,
                creatingSmurfs: false,
                smurfs: [...action.payload]
            }
           
        case actionTypes.ADD_SMURFS_FAILURE:
            return {
                ...state,
                creatingSmurfs: false,
                error: action.payload
            }

        default:
            return state;
    }

}