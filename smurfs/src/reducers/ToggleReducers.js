import { TOGGLE_FORM } from './../actions';

const initialState = {
    showForm: false
}

export const toggleReducer = (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_FORM: 
        return {...state, showForm: true}
        default:
        return state
    }
}