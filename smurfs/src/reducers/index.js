import * as actionTypes from '../actions';

const initialState = {
    smurfs: [],
    
    fetchingSmurfs: false,
    smurfsFetched: false,
    
    updatingSmurf: false,
    
    addingSmurf: false,
    smurfAdded: false,

    deletingSmurf: false,
    
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_SMURFS:
            return { ...state, fetchingSmurfs: true };
        case actionTypes.SMURFS_FETCHED:
            return { ...state, fetchingSmurfs: false, smurfsFetched: true, smurfs: action.payload };
        case actionTypes.SMURFS_FETCHING_ERROR:
            return { ...state, fetchingSmurfs: false, error: action.payload}
        // case actionTypes.UPDATING_SMURF:
        //    return { ...state, updatingSmurf: true };
        // case actionTypes.SMURF_UPDATED:
        //    return { ...state, friend: action.payload, updatingSmurf: false };
        //case actionTypes.DELETING_SMURF:
        //    return { ...state, deletingSmurf: true };
        //case actionTypes.SMURF_DELETED:
        //    return { ...state, smurfs: action.payload, creatingSmurf: false };
        case actionTypes.ADDING_SMURF:
            return { ...state, addingSmurf: true };
        case actionTypes.SMURF_ADDED:
            return { ...state, smurfs: action.payload, addingSmurf: false, smurfAdded: true };
        case actionTypes.SMURF_ADDED_ERROR:
            return { ...state, addingSmurf: false, error: action.payload}
            default: 
                return state;
            }
    }

export default rootReducer;