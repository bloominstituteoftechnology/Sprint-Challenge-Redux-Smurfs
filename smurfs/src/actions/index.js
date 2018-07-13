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

//MY CODE BELOW
import axios from 'axios' ;

export const FETCH_CALLED = 'FETCH_CALLED' ;
export const FETCH_RETURNED = 'FETCH_RETURNED' ;

// export const ADD_CALLED = 'ADD_CALLED' ;
// export const ADD_RETURNED = 'ADD_RETURNED' ;
export const SERVER_ERROR = 'SERVER_ERROR' ;

//const URL = 'http://localhost:3333/smurfs' ;

export const getData = () => {
  const promise = axios.get('http://localhost:3333/smurfs') ;
    return function (dispatch) {
      dispatch({ type: FETCH_CALLED }) ;
      promise
        .then(response => {
          //alert('axios.get called') ;
          //console.log("My Server Response: ", response) ;
          dispatch({ type: FETCH_RETURNED, payload: response.data })
        })
        .catch(err => {
          alert("SERVER_ERROR (see console)") ;
          //console.log("My Server Error: ", err) ;
          dispatch({ type: SERVER_ERROR, payload: err })
        })
    }    
}