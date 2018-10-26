import {
    SINGLE_SMURFS,
    TOGGLE_SMURFS
  } from "../actions";

  const initialState = {
    smurfSelected: {}, 
    showUpdate: false
  };

  export const singleFriendReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SINGLE_SMURFS: 
        return { ...state, smurfSelected: action.payload, showUpdate: false};
        case TOGGLE_SMURFS: 
        return {...state, showUpdate: !state.showUpdate};
        default: 
        return state; 
    }
}; 