/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState ={
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchingSmurfs:
      console.log('Fetching...');
      return {...state, fetchingSmurfs:true};
    case addingSmurf:
      return{
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        smurfs: action.payload,
      };
    case updatingSmurf:
      console.log('Updating...');
      return{...state, updatingSmurf: true, visible:action.visible};
  
    case deletingSmurfs:
      console.log('Deleting...');
      return{...state, deletingSmurfs: true, smurfs: action.payload,};

    case errorFetching:
      return{...state, fetchingSmurfs: false, error: action.payload};
  
    default: return state;
    };
}
