import * as actionTypes from '../actions';

const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  creatingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}

export const smurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_SMURFS:
      return { 
        ...state, 
        gettingSmurfs: true 
      };
    case actionTypes.GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: false,
        smurfs: action.payload,
      }
    case actionTypes.CREATING_SMURF:
      return { 
        ...state, 
        creatingSmurf: true,
      };
    case actionTypes.CREATE_SMURF:
      return {
        ...state,
        creatingSmurf: false,
        smurfs: action.payload,
      };
    case actionTypes.UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: true,
      }  
    case actionTypes.UPDATE_SMURF:
      return {
        ...state,
        updatingSmurf: false,
        smurfs: state.smurfs.map((smurf) => {
          if (smurf.id === action.payload.id) {
            return action.payload;
          } else { 
            return smurf;
          }
        })
      }
    case actionTypes.DESTROYING_SMURF:
      return {
        ...state,
        deletingSmurf: true,
      }
    case actionTypes.DESTROY_SMURF:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: state.smurfs.filter((smurf) => {
          return smurf.id !== action.payload.SmurfRemoved.id;
        })
      }
    case actionTypes.ERROR:
      return {
        ...state,
        gettingSmurfs: false,
        creatingSmurf: false,
        error: action.payload,
      };
    default:
      return state;
  }
}