import { combineReducers } from 'redux';
import { smurfReducer } from './smurfReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
  smurfReducer,
  form: formReducer
})

export default rootReducer; 