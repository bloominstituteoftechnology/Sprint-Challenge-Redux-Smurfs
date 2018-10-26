import { combineReducers } from 'redux';
import {smurfsReducer} from './SmurfsReducer'; 
import {singleSmurfReducer} from './SelectedSmurfReducer'; 

export default combineReducers({
    smurfsReducer,
    singleSmurfReducer
})