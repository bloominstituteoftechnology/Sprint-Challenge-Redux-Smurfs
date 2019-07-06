/*
  Be sure to import in all of the action types from `../actions`
*/
import {

    FETCH_SMURF,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
    ADD_SMURF,
     ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,

    UPDATE_SMURF,
    DELETE_SMURF
} from '../actions/index'


  const initialState =     {
   smurfs: [  ],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

  const rootReducer = (state = initialState, action)=> {
      switch(action.type){
          case FETCH_SMURF: {
              return  Object.assign({}, state, { fetchingSmurfs: true });
          }
          case FETCH_SMURF_SUCCESS: {
              return Object.assign ({}, state, {
                 smurfs: [...state.smurfs, ...action.payload],
                 fetchingSmurfs: false
              });
              }
            
         case FETCH_SMURF_ERROR:{
             return Object.assign ({}, state, {
                 fetchingSmurfs:false,
                 error: 'ERROR fetching smurfs'
             });
            }
       

          case ADD_SMURF: 
            return  {
                ...state,
                fetchingSmurfs: false,
                addingSmurf: true,
                error: ''
            }

            case ADD_SMURF_SUCCESS: {
                return {
                    ...state,
                    smurfs: action.payload,
                    fetchingSmurfs:false,
                    addingSmurf: false,
                    error: ''
                } 
            }
            case ADD_SMURF_FAILURE:
       return {
        ...state,
        fetchingSmurfs: false,
        addingSmurf: false,
        error: action.payload,
      }
          

          case DELETE_SMURF:{
              return {
                  ...state,
                  updatingSmurf:true
              }
          }

          default: return state
      }




  }


  export default rootReducer



//   You'll only need one smurf reducer for this project.
//   Feel free to export it as a default and import as rootReducer. 
//   This will guard your namespacing issues.
//   There is no need for 'combineReducers' in this project.
//   Components can then read your store as, `state` and not `state.fooReducer`.
// */