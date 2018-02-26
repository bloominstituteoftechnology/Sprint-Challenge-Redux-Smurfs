import {GET_SMURFS, ADD_SMURF, SHOW_CREATE_FORM,  UPDATE_SMURF, DELETE_SMURF, FETCHING, ERROR_GETTING_SMURFS} from '../actions/';

const initialState = {
    smurfs: [],
    fetching:false,
    error: null,
    showCreateForm:false,
};

export const smurfs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetching: action.fetching};
        case GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                fetching: false,
            };
        case ADD_SMURF:
            return {...state, smurfs: action.payload};
        case SHOW_CREATE_FORM:
            return {...state, showCreateForm: action.showCreateForm};
        default:
            return state;
    }
};
