import { combineReducers } from 'redux';
import { CRUDreducer } from './CRUDreducer';
import { inputReducer } from './smurfInputReducer';

export default combineReducers({
  crud: CRUDreducer,
  input: inputReducer
})