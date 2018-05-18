import {
    FETCHING_SMURF,
    FETCHED_SMURF,
    DELETE_SMURF,
    SUBMIT_SMURF,
    EDIT_SMURF
} from "../actions";

const initialState = {
    smurfs: [],
    Fetching: false,
    Fetched: false
};

export const smurfsReducer = (state = initialState, { type, smurfs, id }) => {
    switch (type) {
        case FETCHING_SMURF:
            return {
                ...state,
                Fetching: true
            };
        case FETCHED_SMURF:
            return {
                ...state,
                Fetching: false,
                Fetched: true,
                smurfs
            };
        case DELETE_SMURF:
            return {
                ...state,
                Fetching: false,
                Fetched: true,
                smurfs
            };
        case SUBMIT_SMURF:
            return {
                ...state,
                Fetching: false,
                Fetched: true,
                smurfs
            };
        case EDIT_SMURF:
            const index = smurfs.findIndex(friend => friend.id === id);
            return {
                ...state,
                smurfs: [
                    ...smurfs.slice(0, index),
                    (smurfs[index] = {
                        ...smurfs[index],
                        Editing: true
                    }),
                    ...smurfs.slice(index + 1)
                ]
            };
        default:
            return state;
    }
};