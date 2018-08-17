/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  selectedId: null,
  error: null
}


export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS :
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
