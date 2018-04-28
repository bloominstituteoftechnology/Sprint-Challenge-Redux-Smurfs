/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCHING,ERROR,SUCCESS} from '../actions';


let initialState = {
    smurfs:[],
    fetching:false,
    error:null
}

export const smurfReducer = (smurfs = initialState,action) => {
  switch(action.type){
      case FETCHING:
          return {...smurfs,fetching:true,smurfs:[]};
      case SUCCESS:
          return {...smurfs,smurfs:action.smurfs,fetching:false}
      case ERROR:
          return {...smurfs,error:action.error}
      default: 
          console.log(smurfs)
          return smurfs
  }
}



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
