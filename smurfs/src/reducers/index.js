import { GET_SMURFS, GETTING_SMURFS, ADDING_SMURF, ERROR } from "../actions/index"

const initialState = {
    smurfs: [],
    getSmurf: false,
    gettingSmurfs: false,
    addingSmurf: false, 
    error: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GETTING_SMURFS:
            return Object.assign({}, state, {loading: true})
        case GET_SMURFS:
            return Object.assign({}, state, {smurfs: action.smurfs, loading: false, error: ''})
        case ADDING_SMURF:
            return Object.assign({}, state, {loading: true})
            case ERROR: 
            return Object.assign({}, state, {error: action.errorMessage, loading: false})
        default:
            return state       
    }
}