import { FETCHING, SUCCESS, FAILURE} from "../actions";

 const initialState = {
   smurfs: [],
   fetching: false,
   addingSmurf: false,
   error: null,

 };

export default (state= initialState, action) =>{
  switch(action.type){
    case FETCHING:
      return{...state, fetching: true};
    case SUCCESS:
      return{...state, smurfs: action.smurfs, fetching: false};
    case FAILURE:
      return{...state, fetching: false, error: action.payload};
    default:
        return state;
    
  }
};

