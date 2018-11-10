import { LOADING, SUCCESS, FAILURE } from '../actions/index';

 const initialState = {
   smurfs: [],
   loading: true,
   loadingMsg:null,
   error: null
 }


export default (state = initialState, action)=>{
  switch(action.type){
   case LOADING:
      return {...state, loading:true, loadingMsg:[action.payload]}

    case SUCCESS:
      return {...state, smurfs:[...action.payload], loading: false}

    case FAILURE:
     return {...state, error:[action.payload]}


   
    default:
    return state;

  }
}
