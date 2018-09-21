import * as actionTypes from '../actions';

const initialState = {
    smurfs:[],
    gettingSmurfs: false,
    gotSmurfs: false,
    postingSmurf: false,
    postedSmurf: false,
    error: null,
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case actionTypes.GETTING_SMURFS:
            return {...state, gettingSmurfs: true};
        case actionTypes.GET_SMURFS:
            return {
                ...state,
                gettingSmurfs:false,
                gotSmurfs: true,
                smurfs: action.payload,
            };

        case actionTypes.POSTING_SMURF:
            return {...state, postedSmurf:true};
        case actionTypes.POST_SMURF:
            return {
                ...state,
                postedSmurf:true,
                postingSmurf:false,
                smurfs: action.payload,
            };

            case actionTypes.ERROR:
                return {
                    ...state,
                    gettingSmurfs: false,
                    gotSmurfs: false,
                    postingSmurf: false,
                    postedSmurf: false,
                    error: action.payload,

            };
        default:
            return state;
    }
};