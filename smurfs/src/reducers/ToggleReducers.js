import { TOGGLE_FORM, TOGGLE_ADD_FORM } from './../actions';

const initialState = {
    showForm: false,
    showAddForm: false
}

export const toggleReducer = (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_FORM: 
        return {...state, showForm: !state.showForm}
        default:
        return state
    }
}

export const toggleAddReducer = (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_ADD_FORM: 
        return {...state, showAddForm: !state.showAddForm}
        default:
        return state
    }
}