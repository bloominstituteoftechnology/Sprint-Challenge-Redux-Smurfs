import {FETCHING,FETCHED,ERROR} from '../actions';

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
    default:
      return state
  }
}