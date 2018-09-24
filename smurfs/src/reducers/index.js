import { FETCHING_SMURFS, SMURFS_FETCHING_SUCCESS, SMURFS_FETCHING_ERROR } from '../actions';


const initialState = {
  smurfs: [], 
  fetchingSmurfs: false,
  error: null, 
  fetched: false,
  addingSmurf: false,
  // updatingSmurf: false,
  // deletingSmurf: false
};

const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return Object.assign({}, state, { fetchingSmurfs: true });
    
      case SMURFS_FETCHING_SUCCESS:
      return Object.assign({}, state, {
        smurfs:[...state.smurfs, ...action.payload],
        fetchingSmurfs: false,
        fetched: true
      });
    
      case SMURFS_FETCHING_ERROR:
      return Object.assign({}, state, {
        fetchingSMurfs: false,
        error: "Error fetching Smurfs"
      });

      case 'ADD_SMURF':
      return [...state,
      {
        name: action.name,
        age: action.age,
        height: action.height,
        addingSmurf: true
      }]

    default:
      return state;
  }
};

export default smurfsReducer






/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
