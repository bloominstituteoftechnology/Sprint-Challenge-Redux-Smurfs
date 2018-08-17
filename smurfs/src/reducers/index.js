/*
  Be sure to import in all of the action types from `../actions`
*/


const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCHING_DATA':
    return Object.assign({}, state, {fetchingSmurfs: true}); 
    case 'DATA_FETCHED': 
    return Object.assign({}, state, {fetchingSmurfs: false, smurfs: action.payload}); 
    case 'SAVING_DATA': 
    return Object.assign({}, state, {addingSmurfs: true}); 
    case'DATA_SAVED': 
    return Object.assign({}, state, {addingSmurfs: false, smurfs: action.payload}); 
    case 'ERROR': 
    return Object.assign({}, state, {error: action.payload}); 
    default:
    return state; 
  }
}

 
