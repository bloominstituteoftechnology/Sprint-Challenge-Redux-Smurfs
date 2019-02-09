import { LOADING, SUCCESS, FAILURE, UPDATE, SUCCESSFUL_UPDATE } from '../actions/index';

const initialState = {
  smurfs: [],
  loading: false,
  error: "",
  updateID: "",
  clicked: false,
  update: []
}

export default function reducer(state= initialState, action) {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        smurfs: [],
        loading: true,
        err: ''
      }
    
    case SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        loading: false,
        err: ''
      }

    case FAILURE:
      return {
        ...state,
        loading: false,
        err: action.payload
      }

      case UPDATE:
        return{
          ...state,
          updateID: action.payloadId,
          clicked: true,
          update: action.payloadObj
        }

        case SUCCESSFUL_UPDATE:
          return {
            ...state,
            smurfs: action.payload,
            loading: false,
            err: '',
            updateID: "",
            clicked: false,
            update: []
          }

    default: 
      return state;
  }
}
