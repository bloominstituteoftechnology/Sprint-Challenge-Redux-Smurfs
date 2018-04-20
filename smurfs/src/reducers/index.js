import { combineReducers } from 'redux'
import {
  FETCH_START,
  FETCH_ERROR,
  FETCHED_SMURF,
  FETCHED_SMURFS,
  UPDATING_SMURF,
  UPDATED_SMURF,
  DELETING_SMURF,
  DELETED_SMURF
} from '../actions'

const smurfsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCHED_SMURFS:  
      return payload  
    default:
      return state
  }
}

const selectedSmurfReducer = (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_SMURF:
      return payload
    case UPDATED_SMURF:
      return null  
    default:
      return state  
  }  
}

const fetchingSmurfsReducer = (state = false, { type, payload }) => {
  switch (type) {
    case FETCH_START:
      return true
    case FETCH_ERROR:
    case FETCHED_SMURF:
    case FETCHED_SMURFS:
      return false  
    default:
      return state
  }
}

const addingSmurfReducer = (state = false, { type, payload }) => {
  switch (type) {
    case FETCH_ERROR:
      return false  
    default:
      return state
  }
}

const updatingSmurfReducer = (state = false, { type, payload }) => {
  switch (type) {
    case UPDATING_SMURF:  
      return true
    case UPDATED_SMURF:  
    case FETCH_ERROR:
      return false
    default:
      return state
  }
}

const deletingSmurfReducer = (state = false, { type, payload }) => {
  switch (type) {
    case DELETING_SMURF:
      return true
    case DELETED_SMURF:
    case FETCH_ERROR:
      return false  
    default:
      return state
  }
}

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_START:
    case FETCHED_SMURF:
    case FETCHED_SMURFS:
      return null  
    case FETCH_ERROR:
      return payload  
    default:
      return state
  }
}

export default combineReducers({
  smurfs: smurfsReducer,
  selectedSmurf: selectedSmurfReducer,
  fetchingSmurfs: fetchingSmurfsReducer,
  addingSmurf: addingSmurfReducer,
  updatingSmurf: updatingSmurfReducer,
  deletingSmurf: deletingSmurfReducer,
  error: errorReducer
})
