/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
smurfs : [],
error : '',
loading: false

};


export default (state = initialState, action) =>{
  switch(action.type){
    default:
      return state;
  }
}
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




