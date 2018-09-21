/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, FETCHED_SMURFS, SAVE_SMURFS, SAVED_SMURFS, UPDATING_SMURF,UPDATED_SMURF,DELETING_SMURF, DELETED_SMURF, SELECT_SMURF, ERROR } from '../actions'

//  Your initial/default state for this project could *Although does not have to* look a lot like this
  const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
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
    case FETCH_SMURFS:
      return  (
        {
          ...state,        
          fetchingSmurfs: true,
          smurfs: action.payload
        }  
      )           

    case FETCHED_SMURFS:
      return (
          {
            ...state,        
            fetchingSmurfs: false
          } 
      )

    case SAVE_SMURFS:
      return  (
        {
          ...state,        
          addingSmurf: true, 
          smurfs: action.payload           
        }  
      )           

    case SAVED_SMURFS:
      return (
          {
            ...state,        
            addingSmurf: false
          } 
      )

    case UPDATING_SMURF:
      return  (
        {
          ...state,        
          updatingSmurf: true, 
          smurfs: action.payload           
        }  
      )           

    case UPDATED_SMURF:
      return (
        {
          ...state,        
          updatingSmurf: false,          
        } 
      ) 

    case DELETING_SMURF:
      return  (
        {
          ...state,        
          deletingSmurf: true, 
          smurfs: action.payload           
        }  
      )           

    case DELETED_SMURF:
      return (
        {
          ...state,        
          deletingSmurf: false
        } 
      )
      
    case SELECT_SMURF:
      return (
        {
          ...state,
          selectedId: action.id,
          smurfs: state.smurfs.map(smurf =>
            (smurf.selected || smurf.id === action.id)
            ? {...smurf, selected: !smurf.selected}
            : smurf
          )
        }
      )
     
    case ERROR:
      return(
        {
          ...state,
          error: action.error
        }
      )
      
    default:
      return state;
  }
};