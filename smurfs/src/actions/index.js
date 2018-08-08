import axios from "axios";

export const FETCHING_SMURF = "FETCHING_SMURFS";
export const FETCHED_SMURF = "FETCH_SMURFS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATING_SMURF ="UPDATING_SMURF";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETING_SMURF = "DELETING_SMURF"
export const SUBMIT_SMURF = "SUBMIT_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

// Action Types Go Here!
// Be sure to export each action type so you can pull it into your reducer


export const fetch_smurfs = () => {
  const getSmurfs = axios.get('http://localhost:3000/smurfs');
  return function( dispatch) {
    dispatch({
       type: FETCHING_SMURFS
       });  

    getSmurfs
      .then(response => {
        dispatch({
           type: FETCH_SMURFS,
           payload: response.data
           })
          })
          .catch(error =>{
            dispatch({
              type:ERROR,
              payload: error
            })
          })
        }
      }
  
export const addSmurfs = smurf => {
  console.log(smurf)
  const add = axios.get('http://localhost:3000/smurfs');
  return function (dispatch) {
    dispatch({
       type: ADDING_SMURF ,
       
      });
    add
      .then( response  => {
        dispatch({ 
          type: ADD_SMURF,
          payload:response.data
      })
    })
      .catch(error => {
        dispatch({
          type:ERROR,
          payload:error
        })
        
      })
  }
}
export const updateSmurfs = (smurfs, id ) => {
  const update = axios.delete(`http://localhost:3000/smurfs/${id}`,  {name: smurf.name, age: smurf.age, heigt:smurf.height});
  return function(dispatch) {
    dispatch({
   type:UPDATE_SMURF
    });
    update
      .then(response =>  {
        dispatch({
           type: UPDATE_SMURF,
           payload:response.data
        })
      })
      .catch(error => {
        dispatch({
          type:ERROR,
          payload:error
        })
      })
  }
}

export const deleteSmurf = id => {
  const deleteSmurf = axios.delete(`http://localhost:3000/smurfs/${id}`);
  return function(dispatch) {
    dispatch({
      type: DELETING_SMURF,
     
});
deleteSmurf
 .then(response =>{
   dispatch({
     type:DELETE_SMURF,
     payload:response.data
   })
 })
  .catch(error => {
    dispatch({
      type:ERROR,
      payload: error
    
    })
      })
    }
  }

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
