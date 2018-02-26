import {FETCHING_SMURFS, ADDING_SMURF, UPDATING_SMURF, FETCHED_SMURFS, EDITED_SMURF, EDIT_TOGGLE, DELETE_SMURF} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurfs: false,
   error: true
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };

    case ADDING_SMURF:
      return { ...state, addingSmurf: true };

    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };

    // handle get and post 
    case FETCHED_SMURFS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    case EDITED_SMURF:
      let updatedSmurf = state.smurfs.map((smurf)=>{
        if(smurf.id === action.payload.id){
          return action.payload;
        }
        return smurf;
      });
      return {...state, smurfs: updatedSmurf}

      case DELETE_SMURF:
      let deleteSmurf = state.smurfs.filter((smurf)=>{
        return smurf.id !== action.payload;
      });
      return {...state, smurfs: deleteSmurf}

      case EDIT_TOGGLE:
      let updatedEdit = state.smurfs.map((smurf)=>{
        if(smurf.id === action.payload){
          return { ...smurf, editing: true }
        }
        return smurf;
      });
      return {...state, smurfs: updatedEdit}

    default:
      return state;
  }
};
      