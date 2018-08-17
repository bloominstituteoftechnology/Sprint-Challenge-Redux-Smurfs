/*
  Be sure to import in all of the action types from `../actions`
*/
import '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   smurfsFetched: false,
   addingSmurf: false,
   smurfAdded: false,
   updatingSmurf: false,
   smurfUpdated: false,
   smurfDeleted: false,
   whom: -1,
   mode: "INSERT",
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('GETTINGSMURFS'):

    return Object.assign({}, state, {
      fetchingSmurfs: true
    });
    case ('SMURFSGOT'):
    return Object.assign({}, state, {
      fetchingSmurfs: false,
      smurfsFetched:true,
      smurfs: action.payload
    });
    case ('SAVINGSMURFS'):

    return Object.assign({}, state, {
      addingSmurf: true
    });
    case ('SMURFSSAVED'):
    return Object.assign({}, state, {
      smurfAdded: false,
      addingSmurf:true,
      smurfs: action.payload
    });
    case('CHANGETARGET'):
    return Object.assign({}, state, {
      mode: action.payload.mode,
      whom:  action.payload.whom
    });
    case ('UPDATINGSMURF'):

    return Object.assign({}, state, {
      updatingSmurf: true
    });
    case ('SMURFUPDATED'):
    return Object.assign({}, state, {
      smurfAdded: false,
      smurfUpdated:true,
      smurfs: action.payload
    });
    case ('SMURFSDELETED'):
    return Object.assign({}, state, {
      smurfDeleted:true,
      smurfs: action.payload
    });
    case ('ERROR'):
    return Object.assign({}, state, {
  
      error:action.payload
    });
    
    default:
      return state;
  }
};
