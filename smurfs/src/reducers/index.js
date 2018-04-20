import * as actionType from '../actions';

const initialState = {
   smurfs: [{name: 'Harry', age:21, height:"51cm"}, {name: 'Larry', age:210, height:"90cm"}],
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
            return {...state, smurfs: action.payload, fetchingSmurfs: false}
        case actionType.ADD_SMURF:
            return state;
        case actionType.DELETE_SMURF:
            return state;
        case actionType.ERROR:
            return {...state, fetchingSmurfs: false, error: action.payload};
        default:
            return state;
    }
};
