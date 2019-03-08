import { FETCHING, SUCCESS, FAILURE, ADDING, DELETING } from '../actions'

const initialState = {
   smurfs       : [],
   fetching     : false,
   addingSmurf  : false, 
   updatingSmurf: false ,
   deletingSmurf: false ,
   error        : null ,
 }

 export const smurfReducer = ( state = initialState, action) => {
  switch(action.type){
     case FETCHING:
          return {...state,   fetching:true}
     case ADDING:
          return {...state,   fetching:true}
     case DELETING:
          return {...state,   fetching:true}
     case SUCCESS:
          return {...state,   smurfs  :action.payload,  fetching:false}
     case FAILURE:
          return {...state,   error   :action.payload,  fetching:false}
     default:
          return {...state}   ;
  }
}
