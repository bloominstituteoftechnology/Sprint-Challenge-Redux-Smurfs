import { DELETING, SUCCESS, FAILURE, LOADING, ADDING, ADDED, EDITING, EDITED, DELETED, EDITFORM } from '../actions';

const initialState = {
    smurfs: [],
    loading: true,
    error: '',
    adding: false,
    added: false,
    editing: false,
    edited: false,
    deleting: false,
    editForm: false,
    addForm: true,
    editId: null,
    smurf: {}
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type){

        case EDITFORM: 
            return {
                ...state,
                smurfs: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: true,
                addForm: false,
                smurf: action.payload
            }
            
        case EDITING: 

            return {
                ...state,
                smurfs: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: true,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: true,
                addForm: false,
                editId: null
            }

        case EDITED: 

            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: true,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                smurf: action.payload
            }
        case DELETING: 
            return {
                ...state,
                smurfs: [],
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: true,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        case DELETED: 
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                deleted: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        case ADDING: 
            return {
                ...state,
                smurfs: [],
                loading: false,
                error: '',
                adding: true,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        case ADDED: 
            
            return  {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: true,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        case LOADING:
            return {
                ...state,
                smurfs: [],
                loading: true,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }
        
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: '',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        case FAILURE: 
            return {
                ...state,
                smurfs: [],
                loading: false,
                error: 'We had a trouble finding this',
                adding: false,
                added: false,
                editing: false,
                edited: false,
                deleting: false,
                currentSmurf: false,
                editForm: false,
                addForm: true,
                editId: null
            }

        default: 
            return state;
    }
}
export default smurfReducer;
