import { combineReducers } from 'redux';
import {SmurfsReducer} from './SmurfsReducer'; 
import {singleSmurfReducer} from './SelectedSmurfReducer'; 

export default combineReducers({
    SmurfsReducer,
    singleSmurfReducer
})