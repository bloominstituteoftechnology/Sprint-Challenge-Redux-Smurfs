import {
    FETCHING,
    FETCHED,
    ERROR,
    SMURF_ADDED,
    ADDING_SMURF,
    ADD_SMURF_ERROR,
    DELETING_SMURF,
    DELETED_SMURF,
    DELETE_ERROR
} from "../actions";

const initialState = {
    fetchingSmurfs: false,
    smurfsFetched: false,
    smurfAdded: false,
    addingSmurf: false,
    deletingSmurf: false,
    deletedSmurf: false,
    smurfs: [],
    error: null
};

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCHING:
        return Object.assign({}, state, { fetchingSmurfs: true });
    case FETCHED:
        return Object.assign({}, state, {
        smurfs: action.payload,
        fetchingSmurfs: false,
        smurfsFetched: true
        });
    case ERROR:
        eturn Object.assign({}, state, {
        fetchingSmurfs: false,
        error: action.payload
        });
    case ADDING_SMURF:
        return { ...state, addingSmurf: true };
    case SMURF_ADDED:
        return {
        ...state,
        addingSmurf: false,
        smurfAdded: true,
        smurfs: action.payload
        };
    case ADD_SMURF_ERROR:
        console.log(action.payload);
        return { ...state, addingSmurf: false, error: action.payload };
    case DELETING_SMURF:
        console.log(action.payload);
        return { ...state, deletedSmurf: false, deletingSmurf: true };
    case DELETED_SMURF:
        console.log(action.payload);
        return {
        ...state,
        deletingSmurf: false,
        deletedSmurf: true,
        smurfs: action.payload
        };
    case DELETE_ERROR:
        console.log(action.payload);
        return { ...state, deletingSmurf: false, error: action.payload };

    default:
        return state;
    }
};
