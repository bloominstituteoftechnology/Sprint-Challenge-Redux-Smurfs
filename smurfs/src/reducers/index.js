import {FETCHINGSMURF,FETCHSMURF, ADDINGSMURF, ADDSMURF, ERROR} from '../actions'

const intitalState=
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: null,
 }

 export default(state=intitalState, action)=> {
   switch(action.type) {
     case FETCHINGSMURF:
     return {...state,fetchingSmurfs:true}

     case FETCHSMURF:
     return {...state, smurfs:action.smurfs, fetchingSmurfs:false, error:null}

     case ADDINGSMURF:
     return {...state, addingSmurf:true}

     case ADDSMURF:
     return {...state, smurfs:action.smurfs, addingSmurf:false}

     case ERROR:
     return {...state, error:action.errorMessage}

     default:
     return state;
   }
 }

