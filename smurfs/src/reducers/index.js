/*
  Be sure to import in all of the action types from `../actions`
*/
import {GET_SMURF, GOT_SMURF, CREATING_SMURF, CREATED_SMURF, ERROR} from '../actions'

const initialState = {
   smurfs: [],
   getSmurfs: false,
   gotSmurfs: false,
   creatingSmurf: false,
   createdSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_SMURF:
    return Object.assign({}, state, {
      getSmurfs: true,
      gotSmurfs: false,
      creatingSmurf: false,
      createdSmurf: false,
      error: null
    })
    case GOT_SMURF:
    return Object.assign({}, state, {
      getSmurfs: false,
      gotSmurfs: true,
      creatingSmurf: false,
      createdSmurf: false,
      error: null,
      smurfs: action.payload 
    })
    case CREATING_SMURF:
    return Object.assign({}, state, {
      getSmurfs: false,
      gotSmurfs: false,
      creatingSmurf: true,
      createdSmurf: false,
      error: null
    })
    case CREATED_SMURF:
    return Object.assign({}, state, {
      getSmurfs: false,
      gotSmurfs: false,
      creatingSmurf: false,
      createdSmurf: true,
      error: null,
      smurfs: action.payload
    })
    case ERROR:
    return Object.assign({}, state, {
      getSmurfs: false,
      gotSmurfs: false,
      creatingSmurf: false,
      createdSmurf: false,
      error: action.payload
    })
    default:
    return state
  }
}

export default smurfReducer