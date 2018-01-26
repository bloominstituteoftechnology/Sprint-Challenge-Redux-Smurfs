import * as actionTypes from '../actions';

const initialState = {
    smurfs: [],
    gettingSmurfs: false,
    updatingSmurf: false,
    creatingSmurf: false,
    deletingSmurf: false,
    error: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_SMURFS:
            return { ...state, gettingSmurfs: true };
        case actionTypes.SMURFS_FETCHED:
            return { ...state, gettingSmurfs: false, smurfs: action.payload };
        case actionTypes.UPDATING_SMURFS:
            return { ...state, updatingSmurf: true };
        case actionTypes.SMURF_UPDATED:
            return { ...state, friend: action.payload, updatingSmurfs: false };
        case actionTypes.DELETING_SMURF:
            return { ...state, deletingSmurf: true };
        case actionTypes.SMURF_DELETED:
            return { ...state, smurfs: action.payload, creatingSmurf: false };
        case actionTypes.ADDING_SMURF:
            return { ...state, deletingSmurf: true };
        case actionTypes.SMURF_ADDED:
            return { ...state, smurfs: action.payload, creatingSmurf: false };
        case actionTypes.ERROR:
            return {
                ...state,
                gettingSmurfs: false,
                creatingSmurf: false,
                deletingSmurf: false,
                updatingSmurf: false,
            }
    }
}

export default rootReducer;