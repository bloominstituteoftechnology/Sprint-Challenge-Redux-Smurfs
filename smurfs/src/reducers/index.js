import * as actionType from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };

export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.FETCHING:
            return {...state, fetchingSmurfs:true};
        case actionType.FETCHED:
            return {...state, fetchingSmurfs: false, smurfs: action.payload};
        case actionType.ADDING_SMURF:
            return {...state, addingSmurf: true}
        case actionType.ADD_SMURF:
            return {...state, addingSmurf: false, smurfs: action.payload};
        case actionType.DELETE_SMURF:
            return state;
        case actionType.ERROR:
            return {...state, fetchingSmurfs: false, error: action.payload};
        default:
            return state;
    }
};
