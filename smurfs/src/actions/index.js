/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING = 'ADDING';
export const DELETING = 'DELETING';

export const getSmurfs = () => (dispatch) => {
  dispatch ({type: FETCHING})
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type:SUCCESS, payload: res.data})
    })
    .catch( err => {console.log(err)
    dispatch({type:FAILURE,payload: err})
  })
}

export const addSmurf = (index) => (dispatch) => {
  dispatch  ({type: ADDING})
  axios
        .post   ('http://localhost:3333/smurfs'  , index)
        .then   (res => { dispatch({type:  SUCCESS, payload : res.data  });  return  true  })
        .catch  ( err=> { console.log(err)
        dispatch( { type: FAILURE, payload : err})
        return false })
}

export const deleteSmurf = (smurf) => (dispatch) =>{
  dispatch  ({type: DELETING})
  axios
        .delete(`http://localhost:3333/smurfs/${smurf}`)
        .then(response => { dispatch({type: SUCCESS, payload: response.data}) ; return true  })
        .catch( err => { console.log(err) 
        dispatch({ type:FAILURE,payload : err})
        return false })
}       
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
