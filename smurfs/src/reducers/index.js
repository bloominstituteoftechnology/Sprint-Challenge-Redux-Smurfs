/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMF_FTH_IP, SMF_FTH_SCS, SMF_FTH_FLR, SMF_SV_IP, SMF_SV_SCS, SMF_SV_FLR } from '../actions';


/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smf_fthg: false,
  smf_fthd: false,
  smf_svg: false,
  smf_svd: false,
  smf_updtg: false,
  smf_updtd: false,
  smf_dltg: false,
  smf_dltd: false,
  smf_arr: [],
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const smfReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMF_FTH_IP:
      return { ...state, smf_fthg: true };
    case SMF_FTH_SCS:
      return { ...state, smf_fthg: false, smf_fthd: true, smf_arr: [...state.smf_arr, ...action.payload ]};
    case SMF_FTH_FLR:
      return { ...state, smf_fthg:false, err: "Error gathering information" };
    case SMF_SV_IP:
      return { ...state, smf_svg: true };
    case SMF_FTH_SCS:
      return {...state, smf_svg: false, smf_svd: true, smf_arr: [...state.smf_arr, action.payload]};
    case SMF_FTH_FLR:
      return {...state, smf_svg: false, err: "Error gathering information" };
    default:
      return state;
  }
}
