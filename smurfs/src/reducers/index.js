import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import smurfReducer from './smurfReducer'
export default combineReducers ({
  smurfReducer,
  form : formReducer
})
