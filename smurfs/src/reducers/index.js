/*
  Be sure to import in all of the action types from `../actions`
*/
import {ERROR,ADD,ADDING,RECEIVE} from '../actions';

let defaultState =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null
 }


function modifySmurfs(state=[],action){
  switch(action.type){
    case ADD:
      return [
        ...state,{
          name:action.name,
          age:action.age,
          height:action.height
        }
      ]
    default:
      return [];
  }
}
export default (state=defaultState,action)=>{
  switch(action.type){
    case ERROR:
      return Object.assign({},state,{
        error:action.data
      });
    case ADD:
      return Object.assign({},state,{
        smurfs:modifySmurfs(state.smurfs,action)
      });
     case ADDING:
       return Object.assign({},state,{
         addingSmurf:true
       });
     case RECEIVE:
      return Object.assign({},state,{
         fetchingSmurfs: false,
         addingSmurf: false,
         updatingSmurf: false,
         deletingSmurfs: false,
         error: null
      });
    default:
      return state;
  }
}
