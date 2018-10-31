import{GET_SMURFS,GETTING_SMURFS,ADDING_SMURF,ADD_SMURF,ERROR,DELETING,DELETED} from '../actions';

const initialState = {
	smurfs:[],
	gettingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
  deletingSmurf: false,
  error: null
 
}

export const smurfsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
    return {...state, gettingSmurfs: true};
    case GET_SMURFS:
    return{...state, smurfs: action.payload, gettingSmurfs: false};
    case ADDING_SMURF:
    return {...state,addingSmurf: true};
    case ADD_SMURF:
    return {...state, smurfs: action.payload, addingSmurf: false};
    case ERROR:
    return{...state, gettingSmurfs: false, addingSmurf: false, error: action.payload};
    case DELETING:
    return Object.assign({},state,{deletingSmurf:true})
    case DELETED:
    return Object.assign({},state,{deletingSmurf:false,smurfs:action.payload})
    default:
    return state;
  }
};