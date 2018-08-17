import {FETCHING,FETCHED,ERROR,ADDING,ADDED,DELETING,DELETED} from '../actions';

const initialState={
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}


export const smurfsReducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCHING:
      return Object.assign({},state,{fetchingSmurfs:true})
    case FETCHED:
      return Object.assign({},state,{fetchingSmurfs:false,smurfs:action.payload})
    case ERROR: 
      return Object.assign({},state,
        {smurfs: [],
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null})
    case ADDING:
          return Object.assign({},state,{addingSmurf:true})
    case ADDED: 
          return Object.assign({},state,{addingSmurf:false,smurfs:action.payload})
    case DELETING:
          return Object.assign({},state,{deletingSmurf:true})
    case DELETED:
          return Object.assign({},state,{deletingSmurf:false,smurfs:action.payload})
    default:
      return state
  }
}