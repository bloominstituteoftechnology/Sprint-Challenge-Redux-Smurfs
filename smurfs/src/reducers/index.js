/*
  Be sure to import in all of the action types from `../actions`
*/
const initialState = {
  smurfs:[],
  fetchingSmurfs:false,
  error:null
}

const smurfReducer = (state = initialState,action) => {
  switch(action.type) {
    case 'FETCHING':
      return Object.assign({},state,{fetchingSmurfs:true});
    case 'SUCCESS':
      return Object.assign({},state,{smurfs:action.payload,fetchingSmurfs:false});
    case 'ERROR':
      return Object.assign({},state,{error:'errored'});
    case 'ADD':
        return Object.assign({},state,{fetchingSmurfs:false})
    default:
        return state;
  }
}

export default smurfReducer;
/*
 Your initial/default state for this project could look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurfs: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
