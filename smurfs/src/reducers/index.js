import {
  GETTING_SMURFS,
  GOT_SMURFS,
  POSTING_SMURF,
  POSTED_SMURF,
  DELETING_SMURF,
  DELETED_SMURF,
  UPDATED_SMURF,
  UPDATING_SMURF
} from '../actions/index';





const initialState = {
   smurfs: [],
   gettingSmurfs: false,
   gotSmurfs: false,
   postingSmurf: false,
   postedSmurf: false,
   updatingSmurf: false,
   updatedSmurf: false,
   deletingSmurf: false,
   deletedSmurf: false,
   error: null
 }


export const smurfReducer = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_SMURFS:
    return {
      ...state,
      gettingSmurfs: true,
    }

    case GOT_SMURFS:
    return {
      ...state,
      gettingSmurfs: false,
      gotSmurfs: true,
      smurfs: action.payload
    }

    case POSTING_SMURF:
    return {
      ...state,
      postingSmurf: true
    }

    case POSTED_SMURF:
    return {
      ...state,
      postingSmurf: false,
      postedSmurf: true,
      smurfs: action.payload
    }

    case DELETING_SMURF:
    return {
      ...state,
      deletingSmurf: true,
    }

    case DELETED_SMURF:
    return {
      ...state,
      deletingSmurf: false,
      deletedSmurf: true,
      smurfs: action.payload
    }

    case UPDATING_SMURF:
    return {
      ...state,
      updatingSmurf: false
    }

    case UPDATED_SMURF:
    return {
      ...state,
      updatingSmurf: false,
      updatedSmurf: true,
      smurfs: action.payload
    }



    default:
    return state

  }
};

export default smurfReducer;